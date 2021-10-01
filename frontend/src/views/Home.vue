<template>
    <div class="home">
        <b-jumbotron bg-variant="transparent" fluid=true>
            <template #header><b>Z3R0</b></template>
            <template #lead>
                An open-source multi purpose discord bot.
            </template>

            <hr class="my-4"/>

            <b-btn variant="info" @click="goTo('/dashboard')">Add to Discord</b-btn>

            <b-btn href="#features">Features</b-btn>
        </b-jumbotron>
        <div class="botstats bg-darker">
            <a><b>{{ stats.guilds }}</b> Guilds</a>
            <a><b>{{ stats.users }}</b> Users</a>
            <a><b>{{ stats.commands }}</b> Commands Ran</a>
        </div>
        <div class="home-content bg-dark">
            <div class="features" id="features">
                <div class="feature" id="feature-1">
                    <div class="feature-detail">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Portenta haec esse dicit, neque ea ratione ullo modo posse vivi; Maximus dolor, inquit, brevis est. Compensabatur, inquit, cum summis doloribus laetitia. Et quidem, inquit, vehementer errat; </p>
                        <b-btn>More information</b-btn>
                    </div>
                    <img class="zoomable" src="../assets/screenshot-1.png"/>
                </div>
                <div class="feature" id="feature-2">
                    <img class="zoomable" src="../assets/screenshot-1.png"/>
                    <div class="feature-detail">
                        <p>Duo Reges: constructio interrete. Nam diligi et carum esse iucundum est propterea, quia tutiorem vitam et voluptatem pleniorem efficit. Consequens enim est et post oritur, ut dixi. Esse enim, nisi eris, non potes. Quid autem habent admirationis, cum prope accesseris? Non est enim vitium in oratione solum, sed etiam in moribus. Ego quoque, inquit, didicerim libentius si quid attuleris, quam te reprehenderim. An eiusdem modi? Nec enim, dum metuit, iustus est, et certe, si metuere destiterit, non erit; Etenim si delectamur, cum scribimus, quis est tam invidus, qui ab eo nos abducat? </p>
                        <b-btn>More information</b-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
img.zoomable {
    transition: all 0.5s ease;
}
img.zoomable:hover {
    scale: 110%;
}
.home > .jumbotron .btn {
    margin-inline: 6px;
}
.home-content {
    padding: 15px;
    .features {
        padding: 20px 100px;
        .feature {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px 0px;
            .feature-detail {
                text-align: start;
                max-width: 460px;
                width: 100%;
            }
        }
    }
}
.botstats {
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}
.botstats a {
    margin-inline: 50px;
    font-size: larger;
}
</style>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
    name: 'Home',
    data() {
        return {
            stats: { guilds: 0, users: 0, commands: 0 },
        }
    },
    methods: {
        ...mapActions(['clearGeneralData']),
        getBotStats() {
            axios.get('/api/botstats')
            .then((res) => {
                this.stats = res.data;
                if (!res.data.isLoggedIn) {
                    this.clearGeneralData()
                }
            })
        },
    },
    created() {
        this.getBotStats();
    },
}
</script>
