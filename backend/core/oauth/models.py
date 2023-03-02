from __future__ import annotations


class DiscordObject:
    def __init__(self, data):
        self._data = data
        self.id = data['id']

    def __eq__(self, other) -> bool:
        return other.id == self.id

    def __ne__(self, other) -> bool:
        return not self.__eq__(other)

    def __hash__(self) -> int:
        return self.id >> 22

    def json(self):
        """Returns the original JSON data for this model."""
        return self._data


# class TokenResponse(DiscordObject):
#     def __init__(self, *, data: dict) -> None:
#         self._data = data
#         self.access_token: str = self._data["access_token"]
#         self.token_type: str = self._data["token_type"]
#         self.expires_in: int = self._data["expires_in"]
#         self.refresh_token: str = self._data["refresh_token"]
#         self.scope: str = self._data["scope"]


class Guild(DiscordObject):
    def __init__(self, *, data: dict) -> None:
        self._data = data

        self._iconHash = self._data.get("icon")
        self._iconFormat = None if not self._iconHash else "gif" if self._iconHash.startswith("a") else "png"

        self.id: int = self._data["id"]
        self.name: str = self._data["name"]
        self.icon_url: str | None = "https://cdn.discordapp.com/icons/{0.id}/{0._icon_hash}.{0._icon_format}".format(self) if self._iconFormat else None
        self.isOwner: bool | None = self._data.get("owner")
        self.features: list[str] = self._data.get("features", [])
        self.permissions: int = int(self._data.get("permissions", 0))


class User(DiscordObject):
    def __init__(self, *, data: dict):
        self._data = data

        self.id: int = self._data["id"]
        self.name: str = self._data["username"]
        self.avatarUrl: str | None = self._data["avatar"]
        self.discriminator: int = self._data["discriminator"]
        self.mfaEnabled: bool | None = self._data.get("mfa_enabled")
        self.email: str | None = self._data.get("email")
        self.verified: bool | None = self._data.get("verified")

        # self.guilds: List[Guild] = []  # this is filled in when fetch_guilds is called

    def __str__(self) -> str:
        return "{0.name}#{0.discriminator}".format(self)

    def __repr__(self) -> str:
        return "<User id={0.id} name={0.name} discriminator={0.discriminator} verified={0.verified}>".format(
            self
        )
