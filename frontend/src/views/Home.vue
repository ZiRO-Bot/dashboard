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
            <div id="features">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Apud imperitos tum illa dicta sunt, aliquid etiam coronae datum; Ergo in eadem voluptate eum, qui alteri misceat mulsum ipse non sitiens, et eum, qui illud sitiens bibat? Quis enim potest istis, quae te, ut ais, delectant, brevibus et acutis auditis de sententia decedere? Si ista mala sunt, in quae potest incidere sapiens, sapientem esse non esse ad beate vivendum satis. Duo Reges: constructio interrete. Hoc unum Aristo tenuit: praeter vitia atque virtutes negavit rem esse ullam aut fugiendam aut expetendam. Non perfecti autem homines et tamen ingeniis excellentibus praediti excitantur saepe gloria, quae habet speciem honestatis et similitudinem. Earum etiam rerum, quas terra gignit, educatio quaedam et perfectio est non dissimilis animantium. Quicquid porro animo cernimus, id omne oritur a sensibus; Si quicquam extra virtutem habeatur in bonis. Si quicquam extra virtutem habeatur in bonis. Primum non saepe, deinde quae est ista relaxatio, cum et praeteriti doloris memoria recens est et futuri atque inpendentis torquet timor? </p>

                <p>Nam si propter voluptatem, quae est ista laus, quae possit e macello peti? Magni enim aestimabat pecuniam non modo non contra leges, sed etiam legibus partam. Huic mori optimum esse propter desperationem sapientiae, illi propter spem vivere. Nihil acciderat ei, quod nollet, nisi quod anulum, quo delectabatur, in mari abiecerat. Itaque mihi non satis videmini considerare quod iter sit naturae quaeque progressio. Sed existimo te, sicut nostrum Triarium, minus ab eo delectari, quod ista Platonis, Aristoteli, Theophrasti orationis ornamenta neglexerit. Nihilne te delectat umquam -video, quicum loquar-, te igitur, Torquate, ipsum per se nihil delectat? Iam quae corporis sunt, ea nec auctoritatem cum animi partibus, comparandam et cognitionem habent faciliorem. </p>
            </div>
        </div>
    </div>
</template>

<style>
.home-content {
    padding: 15px;
}
button.btn, a.btn {
    margin-inline: 6px;
    padding: 10px 20px;
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
