const FrontPage = require('../src/FrontPage.vue')
const HomeView = require('../src/HomePage.vue')


const TimeStamp = require('../src/FuncPart/TimeStamp.vue')

const GlobalTime = require('../src/FuncPart/GlobalTime.vue')
const TimeConvert = require('../src/FuncPart/TimeConvert.vue')
const routes = [
    {
        path: "/",
        components: FrontPage,
        children: [
            {
                path: "/",
                components: HomeView,
                children: [
                    {
                        path: "time/timestamp",
                        components: TimeStamp
                    },
                    {
                        path: "time/globaltime",
                        components: GlobalTime
                    },
                    {
                        path: "time/timeconvert",
                        components: TimeConvert
                    }
                ]
            }
        ]
    },
]
export default routes