// Local file with outdated data in case API and local storage fail
// Data is from 2020-1-22 to 2020-4-27

var brazil_local_data, spain_local_data, usa_local_data, russia_local_data, china_local_data, italy_local_data;
const local_data_date = "2020-4-27";

window.onload = generate_data();
/**
 * Generates outdated covid-19 data from local info
 * */
function generate_data() {

    // Generate JSON array with brazil outdated local data
    brazil_local_data = JSON.parse(
            `[
                {
                    "date": "2020-1-22",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-23",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-24",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-25",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-26",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-27",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-28",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-29",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-30",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-31",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-1",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-2",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-3",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-4",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-5",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-6",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-7",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-8",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-9",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-10",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-11",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-12",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-13",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-14",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-15",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-16",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-17",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-18",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-19",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-20",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-21",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-22",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-23",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-24",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-25",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-26",
                    "confirmed": 1,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-27",
                    "confirmed": 1,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-28",
                    "confirmed": 1,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-29",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-3-1",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-3-2",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-3-3",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-3-4",
                    "confirmed": 4,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-3-5",
                    "confirmed": 4,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-3-6",
                    "confirmed": 13,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-3-7",
                    "confirmed": 13,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-3-8",
                    "confirmed": 20,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-3-9",
                    "confirmed": 25,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-3-10",
                    "confirmed": 31,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-3-11",
                    "confirmed": 38,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-3-12",
                    "confirmed": 52,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-3-13",
                    "confirmed": 151,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-3-14",
                    "confirmed": 151,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-3-15",
                    "confirmed": 162,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-3-16",
                    "confirmed": 200,
                    "deaths": 0,
                    "recovered": 1
                },
                {
                    "date": "2020-3-17",
                    "confirmed": 321,
                    "deaths": 1,
                    "recovered": 2
                },
                {
                    "date": "2020-3-18",
                    "confirmed": 372,
                    "deaths": 3,
                    "recovered": 2
                },
                {
                    "date": "2020-3-19",
                    "confirmed": 621,
                    "deaths": 6,
                    "recovered": 2
                },
                {
                    "date": "2020-3-20",
                    "confirmed": 793,
                    "deaths": 11,
                    "recovered": 2
                },
                {
                    "date": "2020-3-21",
                    "confirmed": 1021,
                    "deaths": 15,
                    "recovered": 2
                },
                {
                    "date": "2020-3-22",
                    "confirmed": 1546,
                    "deaths": 25,
                    "recovered": 2
                },
                {
                    "date": "2020-3-23",
                    "confirmed": 1924,
                    "deaths": 34,
                    "recovered": 2
                },
                {
                    "date": "2020-3-24",
                    "confirmed": 2247,
                    "deaths": 46,
                    "recovered": 2
                },
                {
                    "date": "2020-3-25",
                    "confirmed": 2554,
                    "deaths": 59,
                    "recovered": 2
                },
                {
                    "date": "2020-3-26",
                    "confirmed": 2985,
                    "deaths": 77,
                    "recovered": 6
                },
                {
                    "date": "2020-3-27",
                    "confirmed": 3417,
                    "deaths": 92,
                    "recovered": 6
                },
                {
                    "date": "2020-3-28",
                    "confirmed": 3904,
                    "deaths": 111,
                    "recovered": 6
                },
                {
                    "date": "2020-3-29",
                    "confirmed": 4256,
                    "deaths": 136,
                    "recovered": 6
                },
                {
                    "date": "2020-3-30",
                    "confirmed": 4579,
                    "deaths": 159,
                    "recovered": 120
                },
                {
                    "date": "2020-3-31",
                    "confirmed": 5717,
                    "deaths": 201,
                    "recovered": 127
                },
                {
                    "date": "2020-4-1",
                    "confirmed": 6836,
                    "deaths": 240,
                    "recovered": 127
                },
                {
                    "date": "2020-4-2",
                    "confirmed": 8044,
                    "deaths": 324,
                    "recovered": 127
                },
                {
                    "date": "2020-4-3",
                    "confirmed": 9056,
                    "deaths": 359,
                    "recovered": 127
                },
                {
                    "date": "2020-4-4",
                    "confirmed": 10360,
                    "deaths": 445,
                    "recovered": 127
                },
                {
                    "date": "2020-4-5",
                    "confirmed": 11130,
                    "deaths": 486,
                    "recovered": 127
                },
                {
                    "date": "2020-4-6",
                    "confirmed": 12161,
                    "deaths": 564,
                    "recovered": 127
                },
                {
                    "date": "2020-4-7",
                    "confirmed": 14034,
                    "deaths": 686,
                    "recovered": 127
                },
                {
                    "date": "2020-4-8",
                    "confirmed": 16170,
                    "deaths": 819,
                    "recovered": 127
                },
                {
                    "date": "2020-4-9",
                    "confirmed": 18092,
                    "deaths": 950,
                    "recovered": 173
                },
                {
                    "date": "2020-4-10",
                    "confirmed": 19638,
                    "deaths": 1057,
                    "recovered": 173
                },
                {
                    "date": "2020-4-11",
                    "confirmed": 20727,
                    "deaths": 1124,
                    "recovered": 173
                },
                {
                    "date": "2020-4-12",
                    "confirmed": 22192,
                    "deaths": 1223,
                    "recovered": 173
                },
                {
                    "date": "2020-4-13",
                    "confirmed": 23430,
                    "deaths": 1328,
                    "recovered": 173
                },
                {
                    "date": "2020-4-14",
                    "confirmed": 25262,
                    "deaths": 1532,
                    "recovered": 3046
                },
                {
                    "date": "2020-4-15",
                    "confirmed": 28320,
                    "deaths": 1736,
                    "recovered": 14026
                },
                {
                    "date": "2020-4-16",
                    "confirmed": 30425,
                    "deaths": 1924,
                    "recovered": 14026
                },
                {
                    "date": "2020-4-17",
                    "confirmed": 33682,
                    "deaths": 2141,
                    "recovered": 14026
                },
                {
                    "date": "2020-4-18",
                    "confirmed": 36658,
                    "deaths": 2354,
                    "recovered": 14026
                },
                {
                    "date": "2020-4-19",
                    "confirmed": 38654,
                    "deaths": 2462,
                    "recovered": 22130
                },
                {
                    "date": "2020-4-20",
                    "confirmed": 40743,
                    "deaths": 2587,
                    "recovered": 22130
                },
                {
                    "date": "2020-4-21",
                    "confirmed": 43079,
                    "deaths": 2741,
                    "recovered": 22991
                },
                {
                    "date": "2020-4-22",
                    "confirmed": 45757,
                    "deaths": 2906,
                    "recovered": 25318
                },
                {
                    "date": "2020-4-23",
                    "confirmed": 50036,
                    "deaths": 3331,
                    "recovered": 26573
                },
                {
                    "date": "2020-4-24",
                    "confirmed": 54043,
                    "deaths": 3704,
                    "recovered": 27655
                },
                {
                    "date": "2020-4-25",
                    "confirmed": 59324,
                    "deaths": 4057,
                    "recovered": 29160
                },
                {
                    "date": "2020-4-26",
                    "confirmed": 63100,
                    "deaths": 4286,
                    "recovered": 30152
                },
                {
                    "date": "2020-4-27",
                    "confirmed": 67446,
                    "deaths": 4603,
                    "recovered": 31142
                }
            ]`
    );

    // Generate JSON array with spain outdated local data
    spain_local_data = JSON.parse(
            `[
                {
                    "date": "2020-1-22",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-23",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-24",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-25",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-26",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-27",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-28",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-29",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-30",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-31",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-1",
                    "confirmed": 1,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-2",
                    "confirmed": 1,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-3",
                    "confirmed": 1,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-4",
                    "confirmed": 1,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-5",
                    "confirmed": 1,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-6",
                    "confirmed": 1,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-7",
                    "confirmed": 1,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-8",
                    "confirmed": 1,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-9",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-10",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-11",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-12",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-13",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-14",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-15",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-16",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-17",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-18",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-19",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-20",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-21",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-22",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-23",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-24",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-25",
                    "confirmed": 6,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-26",
                    "confirmed": 13,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-27",
                    "confirmed": 15,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-28",
                    "confirmed": 32,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-29",
                    "confirmed": 45,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-3-1",
                    "confirmed": 84,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-3-2",
                    "confirmed": 120,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-3-3",
                    "confirmed": 165,
                    "deaths": 1,
                    "recovered": 2
                },
                {
                    "date": "2020-3-4",
                    "confirmed": 222,
                    "deaths": 2,
                    "recovered": 2
                },
                {
                    "date": "2020-3-5",
                    "confirmed": 259,
                    "deaths": 3,
                    "recovered": 2
                },
                {
                    "date": "2020-3-6",
                    "confirmed": 400,
                    "deaths": 5,
                    "recovered": 2
                },
                {
                    "date": "2020-3-7",
                    "confirmed": 500,
                    "deaths": 10,
                    "recovered": 30
                },
                {
                    "date": "2020-3-8",
                    "confirmed": 673,
                    "deaths": 17,
                    "recovered": 30
                },
                {
                    "date": "2020-3-9",
                    "confirmed": 1073,
                    "deaths": 28,
                    "recovered": 32
                },
                {
                    "date": "2020-3-10",
                    "confirmed": 1695,
                    "deaths": 35,
                    "recovered": 32
                },
                {
                    "date": "2020-3-11",
                    "confirmed": 2277,
                    "deaths": 54,
                    "recovered": 183
                },
                {
                    "date": "2020-3-12",
                    "confirmed": 2277,
                    "deaths": 55,
                    "recovered": 183
                },
                {
                    "date": "2020-3-13",
                    "confirmed": 5232,
                    "deaths": 133,
                    "recovered": 193
                },
                {
                    "date": "2020-3-14",
                    "confirmed": 6391,
                    "deaths": 195,
                    "recovered": 517
                },
                {
                    "date": "2020-3-15",
                    "confirmed": 7798,
                    "deaths": 289,
                    "recovered": 517
                },
                {
                    "date": "2020-3-16",
                    "confirmed": 9942,
                    "deaths": 342,
                    "recovered": 530
                },
                {
                    "date": "2020-3-17",
                    "confirmed": 11748,
                    "deaths": 533,
                    "recovered": 1028
                },
                {
                    "date": "2020-3-18",
                    "confirmed": 13910,
                    "deaths": 623,
                    "recovered": 1081
                },
                {
                    "date": "2020-3-19",
                    "confirmed": 17963,
                    "deaths": 830,
                    "recovered": 1107
                },
                {
                    "date": "2020-3-20",
                    "confirmed": 20410,
                    "deaths": 1043,
                    "recovered": 1588
                },
                {
                    "date": "2020-3-21",
                    "confirmed": 25374,
                    "deaths": 1375,
                    "recovered": 2125
                },
                {
                    "date": "2020-3-22",
                    "confirmed": 28768,
                    "deaths": 1772,
                    "recovered": 2575
                },
                {
                    "date": "2020-3-23",
                    "confirmed": 35136,
                    "deaths": 2311,
                    "recovered": 2575
                },
                {
                    "date": "2020-3-24",
                    "confirmed": 39885,
                    "deaths": 2808,
                    "recovered": 3794
                },
                {
                    "date": "2020-3-25",
                    "confirmed": 49515,
                    "deaths": 3647,
                    "recovered": 5367
                },
                {
                    "date": "2020-3-26",
                    "confirmed": 57786,
                    "deaths": 4365,
                    "recovered": 7015
                },
                {
                    "date": "2020-3-27",
                    "confirmed": 65719,
                    "deaths": 5138,
                    "recovered": 9357
                },
                {
                    "date": "2020-3-28",
                    "confirmed": 73235,
                    "deaths": 5982,
                    "recovered": 12285
                },
                {
                    "date": "2020-3-29",
                    "confirmed": 80110,
                    "deaths": 6803,
                    "recovered": 14709
                },
                {
                    "date": "2020-3-30",
                    "confirmed": 87956,
                    "deaths": 7716,
                    "recovered": 16780
                },
                {
                    "date": "2020-3-31",
                    "confirmed": 95923,
                    "deaths": 8464,
                    "recovered": 19259
                },
                {
                    "date": "2020-4-1",
                    "confirmed": 104118,
                    "deaths": 9387,
                    "recovered": 22647
                },
                {
                    "date": "2020-4-2",
                    "confirmed": 112065,
                    "deaths": 10348,
                    "recovered": 26743
                },
                {
                    "date": "2020-4-3",
                    "confirmed": 119199,
                    "deaths": 11198,
                    "recovered": 30513
                },
                {
                    "date": "2020-4-4",
                    "confirmed": 126168,
                    "deaths": 11947,
                    "recovered": 34219
                },
                {
                    "date": "2020-4-5",
                    "confirmed": 131646,
                    "deaths": 12641,
                    "recovered": 38080
                },
                {
                    "date": "2020-4-6",
                    "confirmed": 136675,
                    "deaths": 13341,
                    "recovered": 40437
                },
                {
                    "date": "2020-4-7",
                    "confirmed": 141942,
                    "deaths": 14045,
                    "recovered": 43208
                },
                {
                    "date": "2020-4-8",
                    "confirmed": 148220,
                    "deaths": 14792,
                    "recovered": 48021
                },
                {
                    "date": "2020-4-9",
                    "confirmed": 153222,
                    "deaths": 15447,
                    "recovered": 52165
                },
                {
                    "date": "2020-4-10",
                    "confirmed": 158273,
                    "deaths": 16081,
                    "recovered": 55668
                },
                {
                    "date": "2020-4-11",
                    "confirmed": 163027,
                    "deaths": 16606,
                    "recovered": 59109
                },
                {
                    "date": "2020-4-12",
                    "confirmed": 166831,
                    "deaths": 17209,
                    "recovered": 62391
                },
                {
                    "date": "2020-4-13",
                    "confirmed": 170099,
                    "deaths": 17756,
                    "recovered": 64727
                },
                {
                    "date": "2020-4-14",
                    "confirmed": 172541,
                    "deaths": 18056,
                    "recovered": 67504
                },
                {
                    "date": "2020-4-15",
                    "confirmed": 177644,
                    "deaths": 18708,
                    "recovered": 70853
                },
                {
                    "date": "2020-4-16",
                    "confirmed": 184948,
                    "deaths": 19315,
                    "recovered": 74797
                },
                {
                    "date": "2020-4-17",
                    "confirmed": 190839,
                    "deaths": 20002,
                    "recovered": 74797
                },
                {
                    "date": "2020-4-18",
                    "confirmed": 191726,
                    "deaths": 20043,
                    "recovered": 74797
                },
                {
                    "date": "2020-4-19",
                    "confirmed": 198674,
                    "deaths": 20453,
                    "recovered": 77357
                },
                {
                    "date": "2020-4-20",
                    "confirmed": 200210,
                    "deaths": 20852,
                    "recovered": 80587
                },
                {
                    "date": "2020-4-21",
                    "confirmed": 204178,
                    "deaths": 21282,
                    "recovered": 82514
                },
                {
                    "date": "2020-4-22",
                    "confirmed": 208389,
                    "deaths": 21717,
                    "recovered": 85915
                },
                {
                    "date": "2020-4-23",
                    "confirmed": 213024,
                    "deaths": 22157,
                    "recovered": 89250
                },
                {
                    "date": "2020-4-24",
                    "confirmed": 219764,
                    "deaths": 22524,
                    "recovered": 92355
                },
                {
                    "date": "2020-4-25",
                    "confirmed": 223759,
                    "deaths": 22902,
                    "recovered": 95708
                },
                {
                    "date": "2020-4-26",
                    "confirmed": 226629,
                    "deaths": 23190,
                    "recovered": 117727
                },
                {
                    "date": "2020-4-27",
                    "confirmed": 229422,
                    "deaths": 23521,
                    "recovered": 120832
                }
            ]`
    );

    // Generate JSON array with usa outdated local data
    usa_local_data = JSON.parse(
            `[
                {
                    "date": "2020-1-22",
                    "confirmed": 1,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-23",
                    "confirmed": 1,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-24",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-25",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-26",
                    "confirmed": 5,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-27",
                    "confirmed": 5,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-28",
                    "confirmed": 5,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-29",
                    "confirmed": 5,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-30",
                    "confirmed": 5,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-31",
                    "confirmed": 7,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-1",
                    "confirmed": 8,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-2",
                    "confirmed": 8,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-3",
                    "confirmed": 11,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-4",
                    "confirmed": 11,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-5",
                    "confirmed": 11,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-6",
                    "confirmed": 11,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-7",
                    "confirmed": 11,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-8",
                    "confirmed": 11,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-9",
                    "confirmed": 11,
                    "deaths": 0,
                    "recovered": 3
                },
                {
                    "date": "2020-2-10",
                    "confirmed": 11,
                    "deaths": 0,
                    "recovered": 3
                },
                {
                    "date": "2020-2-11",
                    "confirmed": 12,
                    "deaths": 0,
                    "recovered": 3
                },
                {
                    "date": "2020-2-12",
                    "confirmed": 12,
                    "deaths": 0,
                    "recovered": 3
                },
                {
                    "date": "2020-2-13",
                    "confirmed": 13,
                    "deaths": 0,
                    "recovered": 3
                },
                {
                    "date": "2020-2-14",
                    "confirmed": 13,
                    "deaths": 0,
                    "recovered": 3
                },
                {
                    "date": "2020-2-15",
                    "confirmed": 13,
                    "deaths": 0,
                    "recovered": 3
                },
                {
                    "date": "2020-2-16",
                    "confirmed": 13,
                    "deaths": 0,
                    "recovered": 3
                },
                {
                    "date": "2020-2-17",
                    "confirmed": 13,
                    "deaths": 0,
                    "recovered": 3
                },
                {
                    "date": "2020-2-18",
                    "confirmed": 13,
                    "deaths": 0,
                    "recovered": 3
                },
                {
                    "date": "2020-2-19",
                    "confirmed": 13,
                    "deaths": 0,
                    "recovered": 3
                },
                {
                    "date": "2020-2-20",
                    "confirmed": 13,
                    "deaths": 0,
                    "recovered": 3
                },
                {
                    "date": "2020-2-21",
                    "confirmed": 15,
                    "deaths": 0,
                    "recovered": 5
                },
                {
                    "date": "2020-2-22",
                    "confirmed": 15,
                    "deaths": 0,
                    "recovered": 5
                },
                {
                    "date": "2020-2-23",
                    "confirmed": 15,
                    "deaths": 0,
                    "recovered": 5
                },
                {
                    "date": "2020-2-24",
                    "confirmed": 51,
                    "deaths": 0,
                    "recovered": 5
                },
                {
                    "date": "2020-2-25",
                    "confirmed": 51,
                    "deaths": 0,
                    "recovered": 6
                },
                {
                    "date": "2020-2-26",
                    "confirmed": 57,
                    "deaths": 0,
                    "recovered": 6
                },
                {
                    "date": "2020-2-27",
                    "confirmed": 58,
                    "deaths": 0,
                    "recovered": 6
                },
                {
                    "date": "2020-2-28",
                    "confirmed": 60,
                    "deaths": 0,
                    "recovered": 7
                },
                {
                    "date": "2020-2-29",
                    "confirmed": 68,
                    "deaths": 1,
                    "recovered": 7
                },
                {
                    "date": "2020-3-1",
                    "confirmed": 74,
                    "deaths": 1,
                    "recovered": 7
                },
                {
                    "date": "2020-3-2",
                    "confirmed": 98,
                    "deaths": 6,
                    "recovered": 7
                },
                {
                    "date": "2020-3-3",
                    "confirmed": 118,
                    "deaths": 7,
                    "recovered": 7
                },
                {
                    "date": "2020-3-4",
                    "confirmed": 149,
                    "deaths": 11,
                    "recovered": 7
                },
                {
                    "date": "2020-3-5",
                    "confirmed": 217,
                    "deaths": 12,
                    "recovered": 7
                },
                {
                    "date": "2020-3-6",
                    "confirmed": 262,
                    "deaths": 14,
                    "recovered": 7
                },
                {
                    "date": "2020-3-7",
                    "confirmed": 402,
                    "deaths": 17,
                    "recovered": 7
                },
                {
                    "date": "2020-3-8",
                    "confirmed": 518,
                    "deaths": 21,
                    "recovered": 7
                },
                {
                    "date": "2020-3-9",
                    "confirmed": 583,
                    "deaths": 22,
                    "recovered": 7
                },
                {
                    "date": "2020-3-10",
                    "confirmed": 959,
                    "deaths": 28,
                    "recovered": 8
                },
                {
                    "date": "2020-3-11",
                    "confirmed": 1281,
                    "deaths": 36,
                    "recovered": 8
                },
                {
                    "date": "2020-3-12",
                    "confirmed": 1663,
                    "deaths": 40,
                    "recovered": 12
                },
                {
                    "date": "2020-3-13",
                    "confirmed": 2179,
                    "deaths": 47,
                    "recovered": 12
                },
                {
                    "date": "2020-3-14",
                    "confirmed": 2727,
                    "deaths": 54,
                    "recovered": 12
                },
                {
                    "date": "2020-3-15",
                    "confirmed": 3499,
                    "deaths": 63,
                    "recovered": 12
                },
                {
                    "date": "2020-3-16",
                    "confirmed": 4632,
                    "deaths": 85,
                    "recovered": 17
                },
                {
                    "date": "2020-3-17",
                    "confirmed": 6421,
                    "deaths": 108,
                    "recovered": 17
                },
                {
                    "date": "2020-3-18",
                    "confirmed": 7783,
                    "deaths": 118,
                    "recovered": 105
                },
                {
                    "date": "2020-3-19",
                    "confirmed": 13747,
                    "deaths": 200,
                    "recovered": 121
                },
                {
                    "date": "2020-3-20",
                    "confirmed": 19273,
                    "deaths": 244,
                    "recovered": 147
                },
                {
                    "date": "2020-3-21",
                    "confirmed": 25600,
                    "deaths": 307,
                    "recovered": 176
                },
                {
                    "date": "2020-3-22",
                    "confirmed": 33276,
                    "deaths": 417,
                    "recovered": 178
                },
                {
                    "date": "2020-3-23",
                    "confirmed": 43843,
                    "deaths": 557,
                    "recovered": 178
                },
                {
                    "date": "2020-3-24",
                    "confirmed": 53736,
                    "deaths": 706,
                    "recovered": 348
                },
                {
                    "date": "2020-3-25",
                    "confirmed": 65778,
                    "deaths": 942,
                    "recovered": 361
                },
                {
                    "date": "2020-3-26",
                    "confirmed": 83836,
                    "deaths": 1209,
                    "recovered": 681
                },
                {
                    "date": "2020-3-27",
                    "confirmed": 101657,
                    "deaths": 1581,
                    "recovered": 869
                },
                {
                    "date": "2020-3-28",
                    "confirmed": 121465,
                    "deaths": 2026,
                    "recovered": 1072
                },
                {
                    "date": "2020-3-29",
                    "confirmed": 140909,
                    "deaths": 2467,
                    "recovered": 2665
                },
                {
                    "date": "2020-3-30",
                    "confirmed": 161831,
                    "deaths": 2978,
                    "recovered": 5644
                },
                {
                    "date": "2020-3-31",
                    "confirmed": 188172,
                    "deaths": 3874,
                    "recovered": 7024
                },
                {
                    "date": "2020-4-1",
                    "confirmed": 213242,
                    "deaths": 4760,
                    "recovered": 8474
                },
                {
                    "date": "2020-4-2",
                    "confirmed": 243622,
                    "deaths": 5929,
                    "recovered": 9001
                },
                {
                    "date": "2020-4-3",
                    "confirmed": 275367,
                    "deaths": 7090,
                    "recovered": 9707
                },
                {
                    "date": "2020-4-4",
                    "confirmed": 308650,
                    "deaths": 8408,
                    "recovered": 14652
                },
                {
                    "date": "2020-4-5",
                    "confirmed": 336802,
                    "deaths": 9619,
                    "recovered": 17448
                },
                {
                    "date": "2020-4-6",
                    "confirmed": 366317,
                    "deaths": 10783,
                    "recovered": 19581
                },
                {
                    "date": "2020-4-7",
                    "confirmed": 397121,
                    "deaths": 12794,
                    "recovered": 21763
                },
                {
                    "date": "2020-4-8",
                    "confirmed": 428654,
                    "deaths": 14704,
                    "recovered": 23559
                },
                {
                    "date": "2020-4-9",
                    "confirmed": 462780,
                    "deaths": 16544,
                    "recovered": 25410
                },
                {
                    "date": "2020-4-10",
                    "confirmed": 496535,
                    "deaths": 18595,
                    "recovered": 28790
                },
                {
                    "date": "2020-4-11",
                    "confirmed": 526396,
                    "deaths": 20471,
                    "recovered": 31270
                },
                {
                    "date": "2020-4-12",
                    "confirmed": 555313,
                    "deaths": 22029,
                    "recovered": 32988
                },
                {
                    "date": "2020-4-13",
                    "confirmed": 580619,
                    "deaths": 23538,
                    "recovered": 43482
                },
                {
                    "date": "2020-4-14",
                    "confirmed": 607670,
                    "deaths": 25843,
                    "recovered": 47763
                },
                {
                    "date": "2020-4-15",
                    "confirmed": 636350,
                    "deaths": 28338,
                    "recovered": 52096
                },
                {
                    "date": "2020-4-16",
                    "confirmed": 667592,
                    "deaths": 32930,
                    "recovered": 54703
                },
                {
                    "date": "2020-4-17",
                    "confirmed": 699706,
                    "deaths": 36787,
                    "recovered": 58545
                },
                {
                    "date": "2020-4-18",
                    "confirmed": 732197,
                    "deaths": 38664,
                    "recovered": 64840
                },
                {
                    "date": "2020-4-19",
                    "confirmed": 758809,
                    "deaths": 40661,
                    "recovered": 70337
                },
                {
                    "date": "2020-4-20",
                    "confirmed": 784326,
                    "deaths": 42094,
                    "recovered": 72329
                },
                {
                    "date": "2020-4-21",
                    "confirmed": 811865,
                    "deaths": 44444,
                    "recovered": 75204
                },
                {
                    "date": "2020-4-22",
                    "confirmed": 840351,
                    "deaths": 46622,
                    "recovered": 77366
                },
                {
                    "date": "2020-4-23",
                    "confirmed": 869170,
                    "deaths": 49954,
                    "recovered": 80203
                },
                {
                    "date": "2020-4-24",
                    "confirmed": 905358,
                    "deaths": 51949,
                    "recovered": 99079
                },
                {
                    "date": "2020-4-25",
                    "confirmed": 938154,
                    "deaths": 53755,
                    "recovered": 100372
                },
                {
                    "date": "2020-4-26",
                    "confirmed": 965785,
                    "deaths": 54881,
                    "recovered": 106988
                },
                {
                    "date": "2020-4-27",
                    "confirmed": 988197,
                    "deaths": 56259,
                    "recovered": 111424
                }
            ]`
    );

    // Generate JSON array with russia outdated local data
    russia_local_data = JSON.parse(
           `[
                {
                    "date": "2020-1-22",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-23",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-24",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-25",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-26",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-27",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-28",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-29",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-30",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-31",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-1",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-2",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-3",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-4",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-5",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-6",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-7",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-8",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-9",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-10",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-11",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-12",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-13",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-14",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-15",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-16",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-17",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-18",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-19",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-20",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-21",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-22",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-23",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-24",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-25",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-26",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-27",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-28",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-2-29",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-3-1",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-3-2",
                    "confirmed": 3,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-3-3",
                    "confirmed": 3,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-3-4",
                    "confirmed": 3,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-3-5",
                    "confirmed": 4,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-3-6",
                    "confirmed": 13,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-3-7",
                    "confirmed": 13,
                    "deaths": 0,
                    "recovered": 2
                },
                {
                    "date": "2020-3-8",
                    "confirmed": 17,
                    "deaths": 0,
                    "recovered": 3
                },
                {
                    "date": "2020-3-9",
                    "confirmed": 17,
                    "deaths": 0,
                    "recovered": 3
                },
                {
                    "date": "2020-3-10",
                    "confirmed": 20,
                    "deaths": 0,
                    "recovered": 3
                },
                {
                    "date": "2020-3-11",
                    "confirmed": 20,
                    "deaths": 0,
                    "recovered": 3
                },
                {
                    "date": "2020-3-12",
                    "confirmed": 28,
                    "deaths": 0,
                    "recovered": 3
                },
                {
                    "date": "2020-3-13",
                    "confirmed": 45,
                    "deaths": 0,
                    "recovered": 3
                },
                {
                    "date": "2020-3-14",
                    "confirmed": 59,
                    "deaths": 0,
                    "recovered": 8
                },
                {
                    "date": "2020-3-15",
                    "confirmed": 63,
                    "deaths": 0,
                    "recovered": 8
                },
                {
                    "date": "2020-3-16",
                    "confirmed": 90,
                    "deaths": 0,
                    "recovered": 8
                },
                {
                    "date": "2020-3-17",
                    "confirmed": 114,
                    "deaths": 0,
                    "recovered": 8
                },
                {
                    "date": "2020-3-18",
                    "confirmed": 147,
                    "deaths": 0,
                    "recovered": 8
                },
                {
                    "date": "2020-3-19",
                    "confirmed": 199,
                    "deaths": 1,
                    "recovered": 9
                },
                {
                    "date": "2020-3-20",
                    "confirmed": 253,
                    "deaths": 1,
                    "recovered": 9
                },
                {
                    "date": "2020-3-21",
                    "confirmed": 306,
                    "deaths": 1,
                    "recovered": 12
                },
                {
                    "date": "2020-3-22",
                    "confirmed": 367,
                    "deaths": 1,
                    "recovered": 16
                },
                {
                    "date": "2020-3-23",
                    "confirmed": 438,
                    "deaths": 1,
                    "recovered": 16
                },
                {
                    "date": "2020-3-24",
                    "confirmed": 495,
                    "deaths": 1,
                    "recovered": 22
                },
                {
                    "date": "2020-3-25",
                    "confirmed": 658,
                    "deaths": 3,
                    "recovered": 29
                },
                {
                    "date": "2020-3-26",
                    "confirmed": 840,
                    "deaths": 3,
                    "recovered": 38
                },
                {
                    "date": "2020-3-27",
                    "confirmed": 1036,
                    "deaths": 4,
                    "recovered": 45
                },
                {
                    "date": "2020-3-28",
                    "confirmed": 1264,
                    "deaths": 4,
                    "recovered": 49
                },
                {
                    "date": "2020-3-29",
                    "confirmed": 1534,
                    "deaths": 8,
                    "recovered": 64
                },
                {
                    "date": "2020-3-30",
                    "confirmed": 1836,
                    "deaths": 9,
                    "recovered": 66
                },
                {
                    "date": "2020-3-31",
                    "confirmed": 2337,
                    "deaths": 17,
                    "recovered": 121
                },
                {
                    "date": "2020-4-1",
                    "confirmed": 2777,
                    "deaths": 24,
                    "recovered": 190
                },
                {
                    "date": "2020-4-2",
                    "confirmed": 3548,
                    "deaths": 30,
                    "recovered": 235
                },
                {
                    "date": "2020-4-3",
                    "confirmed": 4149,
                    "deaths": 34,
                    "recovered": 281
                },
                {
                    "date": "2020-4-4",
                    "confirmed": 4731,
                    "deaths": 43,
                    "recovered": 333
                },
                {
                    "date": "2020-4-5",
                    "confirmed": 5389,
                    "deaths": 45,
                    "recovered": 355
                },
                {
                    "date": "2020-4-6",
                    "confirmed": 6343,
                    "deaths": 47,
                    "recovered": 406
                },
                {
                    "date": "2020-4-7",
                    "confirmed": 7497,
                    "deaths": 58,
                    "recovered": 494
                },
                {
                    "date": "2020-4-8",
                    "confirmed": 8672,
                    "deaths": 63,
                    "recovered": 580
                },
                {
                    "date": "2020-4-9",
                    "confirmed": 10131,
                    "deaths": 76,
                    "recovered": 698
                },
                {
                    "date": "2020-4-10",
                    "confirmed": 11917,
                    "deaths": 94,
                    "recovered": 795
                },
                {
                    "date": "2020-4-11",
                    "confirmed": 13584,
                    "deaths": 106,
                    "recovered": 1045
                },
                {
                    "date": "2020-4-12",
                    "confirmed": 15770,
                    "deaths": 130,
                    "recovered": 1291
                },
                {
                    "date": "2020-4-13",
                    "confirmed": 18328,
                    "deaths": 148,
                    "recovered": 1470
                },
                {
                    "date": "2020-4-14",
                    "confirmed": 21102,
                    "deaths": 170,
                    "recovered": 1694
                },
                {
                    "date": "2020-4-15",
                    "confirmed": 24490,
                    "deaths": 198,
                    "recovered": 1986
                },
                {
                    "date": "2020-4-16",
                    "confirmed": 27938,
                    "deaths": 232,
                    "recovered": 2304
                },
                {
                    "date": "2020-4-17",
                    "confirmed": 32008,
                    "deaths": 273,
                    "recovered": 2590
                },
                {
                    "date": "2020-4-18",
                    "confirmed": 36793,
                    "deaths": 313,
                    "recovered": 3057
                },
                {
                    "date": "2020-4-19",
                    "confirmed": 42853,
                    "deaths": 361,
                    "recovered": 3291
                },
                {
                    "date": "2020-4-20",
                    "confirmed": 47121,
                    "deaths": 405,
                    "recovered": 3446
                },
                {
                    "date": "2020-4-21",
                    "confirmed": 52763,
                    "deaths": 456,
                    "recovered": 3873
                },
                {
                    "date": "2020-4-22",
                    "confirmed": 57999,
                    "deaths": 513,
                    "recovered": 4420
                },
                {
                    "date": "2020-4-23",
                    "confirmed": 62773,
                    "deaths": 555,
                    "recovered": 4891
                },
                {
                    "date": "2020-4-24",
                    "confirmed": 68622,
                    "deaths": 615,
                    "recovered": 5568
                },
                {
                    "date": "2020-4-25",
                    "confirmed": 74588,
                    "deaths": 681,
                    "recovered": 6250
                },
                {
                    "date": "2020-4-26",
                    "confirmed": 80949,
                    "deaths": 747,
                    "recovered": 6767
                },
                {
                    "date": "2020-4-27",
                    "confirmed": 87147,
                    "deaths": 794,
                    "recovered": 7346
                }
           ]`
    );

    // Generate JSON array with china outdated local data
    china_local_data = JSON.parse(
           `[
                {
                    "date": "2020-1-22",
                    "confirmed": 548,
                    "deaths": 17,
                    "recovered": 28
                },
                {
                    "date": "2020-1-23",
                    "confirmed": 643,
                    "deaths": 18,
                    "recovered": 30
                },
                {
                    "date": "2020-1-24",
                    "confirmed": 920,
                    "deaths": 26,
                    "recovered": 36
                },
                {
                    "date": "2020-1-25",
                    "confirmed": 1406,
                    "deaths": 42,
                    "recovered": 39
                },
                {
                    "date": "2020-1-26",
                    "confirmed": 2075,
                    "deaths": 56,
                    "recovered": 49
                },
                {
                    "date": "2020-1-27",
                    "confirmed": 2877,
                    "deaths": 82,
                    "recovered": 58
                },
                {
                    "date": "2020-1-28",
                    "confirmed": 5509,
                    "deaths": 131,
                    "recovered": 101
                },
                {
                    "date": "2020-1-29",
                    "confirmed": 6087,
                    "deaths": 133,
                    "recovered": 120
                },
                {
                    "date": "2020-1-30",
                    "confirmed": 8141,
                    "deaths": 171,
                    "recovered": 135
                },
                {
                    "date": "2020-1-31",
                    "confirmed": 9802,
                    "deaths": 213,
                    "recovered": 214
                },
                {
                    "date": "2020-2-1",
                    "confirmed": 11891,
                    "deaths": 259,
                    "recovered": 275
                },
                {
                    "date": "2020-2-2",
                    "confirmed": 16630,
                    "deaths": 361,
                    "recovered": 463
                },
                {
                    "date": "2020-2-3",
                    "confirmed": 19716,
                    "deaths": 425,
                    "recovered": 614
                },
                {
                    "date": "2020-2-4",
                    "confirmed": 23707,
                    "deaths": 491,
                    "recovered": 843
                },
                {
                    "date": "2020-2-5",
                    "confirmed": 27440,
                    "deaths": 563,
                    "recovered": 1115
                },
                {
                    "date": "2020-2-6",
                    "confirmed": 30587,
                    "deaths": 633,
                    "recovered": 1477
                },
                {
                    "date": "2020-2-7",
                    "confirmed": 34110,
                    "deaths": 718,
                    "recovered": 1999
                },
                {
                    "date": "2020-2-8",
                    "confirmed": 36814,
                    "deaths": 805,
                    "recovered": 2596
                },
                {
                    "date": "2020-2-9",
                    "confirmed": 39829,
                    "deaths": 905,
                    "recovered": 3219
                },
                {
                    "date": "2020-2-10",
                    "confirmed": 42354,
                    "deaths": 1012,
                    "recovered": 3918
                },
                {
                    "date": "2020-2-11",
                    "confirmed": 44386,
                    "deaths": 1112,
                    "recovered": 4636
                },
                {
                    "date": "2020-2-12",
                    "confirmed": 44759,
                    "deaths": 1117,
                    "recovered": 5082
                },
                {
                    "date": "2020-2-13",
                    "confirmed": 59895,
                    "deaths": 1369,
                    "recovered": 6217
                },
                {
                    "date": "2020-2-14",
                    "confirmed": 66358,
                    "deaths": 1521,
                    "recovered": 7977
                },
                {
                    "date": "2020-2-15",
                    "confirmed": 68413,
                    "deaths": 1663,
                    "recovered": 9298
                },
                {
                    "date": "2020-2-16",
                    "confirmed": 70513,
                    "deaths": 1766,
                    "recovered": 10755
                },
                {
                    "date": "2020-2-17",
                    "confirmed": 72434,
                    "deaths": 1864,
                    "recovered": 12462
                },
                {
                    "date": "2020-2-18",
                    "confirmed": 74211,
                    "deaths": 2003,
                    "recovered": 14206
                },
                {
                    "date": "2020-2-19",
                    "confirmed": 74619,
                    "deaths": 2116,
                    "recovered": 15962
                },
                {
                    "date": "2020-2-20",
                    "confirmed": 75077,
                    "deaths": 2238,
                    "recovered": 18014
                },
                {
                    "date": "2020-2-21",
                    "confirmed": 75550,
                    "deaths": 2238,
                    "recovered": 18704
                },
                {
                    "date": "2020-2-22",
                    "confirmed": 77001,
                    "deaths": 2443,
                    "recovered": 22699
                },
                {
                    "date": "2020-2-23",
                    "confirmed": 77022,
                    "deaths": 2445,
                    "recovered": 23187
                },
                {
                    "date": "2020-2-24",
                    "confirmed": 77241,
                    "deaths": 2595,
                    "recovered": 25015
                },
                {
                    "date": "2020-2-25",
                    "confirmed": 77754,
                    "deaths": 2665,
                    "recovered": 27676
                },
                {
                    "date": "2020-2-26",
                    "confirmed": 78166,
                    "deaths": 2717,
                    "recovered": 30084
                },
                {
                    "date": "2020-2-27",
                    "confirmed": 78600,
                    "deaths": 2746,
                    "recovered": 32930
                },
                {
                    "date": "2020-2-28",
                    "confirmed": 78928,
                    "deaths": 2790,
                    "recovered": 36329
                },
                {
                    "date": "2020-2-29",
                    "confirmed": 79356,
                    "deaths": 2837,
                    "recovered": 39320
                },
                {
                    "date": "2020-3-1",
                    "confirmed": 79932,
                    "deaths": 2872,
                    "recovered": 42162
                },
                {
                    "date": "2020-3-2",
                    "confirmed": 80136,
                    "deaths": 2914,
                    "recovered": 44854
                },
                {
                    "date": "2020-3-3",
                    "confirmed": 80261,
                    "deaths": 2947,
                    "recovered": 47450
                },
                {
                    "date": "2020-3-4",
                    "confirmed": 80386,
                    "deaths": 2983,
                    "recovered": 50001
                },
                {
                    "date": "2020-3-5",
                    "confirmed": 80537,
                    "deaths": 3015,
                    "recovered": 52292
                },
                {
                    "date": "2020-3-6",
                    "confirmed": 80690,
                    "deaths": 3044,
                    "recovered": 53944
                },
                {
                    "date": "2020-3-7",
                    "confirmed": 80770,
                    "deaths": 3072,
                    "recovered": 55539
                },
                {
                    "date": "2020-3-8",
                    "confirmed": 80823,
                    "deaths": 3100,
                    "recovered": 57388
                },
                {
                    "date": "2020-3-9",
                    "confirmed": 80860,
                    "deaths": 3123,
                    "recovered": 58804
                },
                {
                    "date": "2020-3-10",
                    "confirmed": 80887,
                    "deaths": 3139,
                    "recovered": 60181
                },
                {
                    "date": "2020-3-11",
                    "confirmed": 80921,
                    "deaths": 3161,
                    "recovered": 61644
                },
                {
                    "date": "2020-3-12",
                    "confirmed": 80932,
                    "deaths": 3172,
                    "recovered": 62901
                },
                {
                    "date": "2020-3-13",
                    "confirmed": 80945,
                    "deaths": 3180,
                    "recovered": 64196
                },
                {
                    "date": "2020-3-14",
                    "confirmed": 80977,
                    "deaths": 3193,
                    "recovered": 65660
                },
                {
                    "date": "2020-3-15",
                    "confirmed": 81003,
                    "deaths": 3203,
                    "recovered": 67017
                },
                {
                    "date": "2020-3-16",
                    "confirmed": 81033,
                    "deaths": 3217,
                    "recovered": 67910
                },
                {
                    "date": "2020-3-17",
                    "confirmed": 81058,
                    "deaths": 3230,
                    "recovered": 68798
                },
                {
                    "date": "2020-3-18",
                    "confirmed": 81102,
                    "deaths": 3241,
                    "recovered": 69755
                },
                {
                    "date": "2020-3-19",
                    "confirmed": 81156,
                    "deaths": 3249,
                    "recovered": 70535
                },
                {
                    "date": "2020-3-20",
                    "confirmed": 81250,
                    "deaths": 3253,
                    "recovered": 71266
                },
                {
                    "date": "2020-3-21",
                    "confirmed": 81305,
                    "deaths": 3259,
                    "recovered": 71857
                },
                {
                    "date": "2020-3-22",
                    "confirmed": 81435,
                    "deaths": 3274,
                    "recovered": 72362
                },
                {
                    "date": "2020-3-23",
                    "confirmed": 81498,
                    "deaths": 3274,
                    "recovered": 72814
                },
                {
                    "date": "2020-3-24",
                    "confirmed": 81591,
                    "deaths": 3281,
                    "recovered": 73280
                },
                {
                    "date": "2020-3-25",
                    "confirmed": 81661,
                    "deaths": 3285,
                    "recovered": 73773
                },
                {
                    "date": "2020-3-26",
                    "confirmed": 81782,
                    "deaths": 3291,
                    "recovered": 74181
                },
                {
                    "date": "2020-3-27",
                    "confirmed": 81897,
                    "deaths": 3296,
                    "recovered": 74720
                },
                {
                    "date": "2020-3-28",
                    "confirmed": 81999,
                    "deaths": 3299,
                    "recovered": 75100
                },
                {
                    "date": "2020-3-29",
                    "confirmed": 82122,
                    "deaths": 3304,
                    "recovered": 75582
                },
                {
                    "date": "2020-3-30",
                    "confirmed": 82198,
                    "deaths": 3308,
                    "recovered": 75923
                },
                {
                    "date": "2020-3-31",
                    "confirmed": 82279,
                    "deaths": 3309,
                    "recovered": 76206
                },
                {
                    "date": "2020-4-1",
                    "confirmed": 82361,
                    "deaths": 3316,
                    "recovered": 76405
                },
                {
                    "date": "2020-4-2",
                    "confirmed": 82432,
                    "deaths": 3322,
                    "recovered": 76565
                },
                {
                    "date": "2020-4-3",
                    "confirmed": 82511,
                    "deaths": 3326,
                    "recovered": 76760
                },
                {
                    "date": "2020-4-4",
                    "confirmed": 82543,
                    "deaths": 3330,
                    "recovered": 76946
                },
                {
                    "date": "2020-4-5",
                    "confirmed": 82602,
                    "deaths": 3333,
                    "recovered": 77207
                },
                {
                    "date": "2020-4-6",
                    "confirmed": 82665,
                    "deaths": 3335,
                    "recovered": 77310
                },
                {
                    "date": "2020-4-7",
                    "confirmed": 82718,
                    "deaths": 3335,
                    "recovered": 77410
                },
                {
                    "date": "2020-4-8",
                    "confirmed": 82809,
                    "deaths": 3337,
                    "recovered": 77567
                },
                {
                    "date": "2020-4-9",
                    "confirmed": 82883,
                    "deaths": 3339,
                    "recovered": 77679
                },
                {
                    "date": "2020-4-10",
                    "confirmed": 82941,
                    "deaths": 3340,
                    "recovered": 77791
                },
                {
                    "date": "2020-4-11",
                    "confirmed": 83014,
                    "deaths": 3343,
                    "recovered": 77877
                },
                {
                    "date": "2020-4-12",
                    "confirmed": 83134,
                    "deaths": 3343,
                    "recovered": 77956
                },
                {
                    "date": "2020-4-13",
                    "confirmed": 83213,
                    "deaths": 3345,
                    "recovered": 78039
                },
                {
                    "date": "2020-4-14",
                    "confirmed": 83306,
                    "deaths": 3345,
                    "recovered": 78200
                },
                {
                    "date": "2020-4-15",
                    "confirmed": 83356,
                    "deaths": 3346,
                    "recovered": 78311
                },
                {
                    "date": "2020-4-16",
                    "confirmed": 83403,
                    "deaths": 3346,
                    "recovered": 78401
                },
                {
                    "date": "2020-4-17",
                    "confirmed": 83760,
                    "deaths": 4636,
                    "recovered": 77552
                },
                {
                    "date": "2020-4-18",
                    "confirmed": 83787,
                    "deaths": 4636,
                    "recovered": 77614
                },
                {
                    "date": "2020-4-19",
                    "confirmed": 83805,
                    "deaths": 4636,
                    "recovered": 77690
                },
                {
                    "date": "2020-4-20",
                    "confirmed": 83817,
                    "deaths": 4636,
                    "recovered": 77745
                },
                {
                    "date": "2020-4-21",
                    "confirmed": 83853,
                    "deaths": 4636,
                    "recovered": 77799
                },
                {
                    "date": "2020-4-22",
                    "confirmed": 83868,
                    "deaths": 4636,
                    "recovered": 77861
                },
                {
                    "date": "2020-4-23",
                    "confirmed": 83884,
                    "deaths": 4636,
                    "recovered": 77983
                },
                {
                    "date": "2020-4-24",
                    "confirmed": 83899,
                    "deaths": 4636,
                    "recovered": 78109
                },
                {
                    "date": "2020-4-25",
                    "confirmed": 83909,
                    "deaths": 4636,
                    "recovered": 78175
                },
                {
                    "date": "2020-4-26",
                    "confirmed": 83912,
                    "deaths": 4637,
                    "recovered": 78277
                },
                {
                    "date": "2020-4-27",
                    "confirmed": 83918,
                    "deaths": 4637,
                    "recovered": 78374
                }
           ]`
    );

    // Generate JSON array with italy outdated local data
    italy_local_data = JSON.parse(
           `[
                {
                    "date": "2020-1-22",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-23",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-24",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-25",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-26",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-27",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-28",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-29",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-30",
                    "confirmed": 0,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-1-31",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-1",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-2",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-3",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-4",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-5",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-6",
                    "confirmed": 2,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-7",
                    "confirmed": 3,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-8",
                    "confirmed": 3,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-9",
                    "confirmed": 3,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-10",
                    "confirmed": 3,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-11",
                    "confirmed": 3,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-12",
                    "confirmed": 3,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-13",
                    "confirmed": 3,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-14",
                    "confirmed": 3,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-15",
                    "confirmed": 3,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-16",
                    "confirmed": 3,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-17",
                    "confirmed": 3,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-18",
                    "confirmed": 3,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-19",
                    "confirmed": 3,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-20",
                    "confirmed": 3,
                    "deaths": 0,
                    "recovered": 0
                },
                {
                    "date": "2020-2-21",
                    "confirmed": 20,
                    "deaths": 1,
                    "recovered": 0
                },
                {
                    "date": "2020-2-22",
                    "confirmed": 62,
                    "deaths": 2,
                    "recovered": 1
                },
                {
                    "date": "2020-2-23",
                    "confirmed": 155,
                    "deaths": 3,
                    "recovered": 2
                },
                {
                    "date": "2020-2-24",
                    "confirmed": 229,
                    "deaths": 7,
                    "recovered": 1
                },
                {
                    "date": "2020-2-25",
                    "confirmed": 322,
                    "deaths": 10,
                    "recovered": 1
                },
                {
                    "date": "2020-2-26",
                    "confirmed": 453,
                    "deaths": 12,
                    "recovered": 3
                },
                {
                    "date": "2020-2-27",
                    "confirmed": 655,
                    "deaths": 17,
                    "recovered": 45
                },
                {
                    "date": "2020-2-28",
                    "confirmed": 888,
                    "deaths": 21,
                    "recovered": 46
                },
                {
                    "date": "2020-2-29",
                    "confirmed": 1128,
                    "deaths": 29,
                    "recovered": 46
                },
                {
                    "date": "2020-3-1",
                    "confirmed": 1694,
                    "deaths": 34,
                    "recovered": 83
                },
                {
                    "date": "2020-3-2",
                    "confirmed": 2036,
                    "deaths": 52,
                    "recovered": 149
                },
                {
                    "date": "2020-3-3",
                    "confirmed": 2502,
                    "deaths": 79,
                    "recovered": 160
                },
                {
                    "date": "2020-3-4",
                    "confirmed": 3089,
                    "deaths": 107,
                    "recovered": 276
                },
                {
                    "date": "2020-3-5",
                    "confirmed": 3858,
                    "deaths": 148,
                    "recovered": 414
                },
                {
                    "date": "2020-3-6",
                    "confirmed": 4636,
                    "deaths": 197,
                    "recovered": 523
                },
                {
                    "date": "2020-3-7",
                    "confirmed": 5883,
                    "deaths": 233,
                    "recovered": 589
                },
                {
                    "date": "2020-3-8",
                    "confirmed": 7375,
                    "deaths": 366,
                    "recovered": 622
                },
                {
                    "date": "2020-3-9",
                    "confirmed": 9172,
                    "deaths": 463,
                    "recovered": 724
                },
                {
                    "date": "2020-3-10",
                    "confirmed": 10149,
                    "deaths": 631,
                    "recovered": 724
                },
                {
                    "date": "2020-3-11",
                    "confirmed": 12462,
                    "deaths": 827,
                    "recovered": 1045
                },
                {
                    "date": "2020-3-12",
                    "confirmed": 12462,
                    "deaths": 827,
                    "recovered": 1045
                },
                {
                    "date": "2020-3-13",
                    "confirmed": 17660,
                    "deaths": 1266,
                    "recovered": 1439
                },
                {
                    "date": "2020-3-14",
                    "confirmed": 21157,
                    "deaths": 1441,
                    "recovered": 1966
                },
                {
                    "date": "2020-3-15",
                    "confirmed": 24747,
                    "deaths": 1809,
                    "recovered": 2335
                },
                {
                    "date": "2020-3-16",
                    "confirmed": 27980,
                    "deaths": 2158,
                    "recovered": 2749
                },
                {
                    "date": "2020-3-17",
                    "confirmed": 31506,
                    "deaths": 2503,
                    "recovered": 2941
                },
                {
                    "date": "2020-3-18",
                    "confirmed": 35713,
                    "deaths": 2978,
                    "recovered": 4025
                },
                {
                    "date": "2020-3-19",
                    "confirmed": 41035,
                    "deaths": 3405,
                    "recovered": 4440
                },
                {
                    "date": "2020-3-20",
                    "confirmed": 47021,
                    "deaths": 4032,
                    "recovered": 4440
                },
                {
                    "date": "2020-3-21",
                    "confirmed": 53578,
                    "deaths": 4825,
                    "recovered": 6072
                },
                {
                    "date": "2020-3-22",
                    "confirmed": 59138,
                    "deaths": 5476,
                    "recovered": 7024
                },
                {
                    "date": "2020-3-23",
                    "confirmed": 63927,
                    "deaths": 6077,
                    "recovered": 7024
                },
                {
                    "date": "2020-3-24",
                    "confirmed": 69176,
                    "deaths": 6820,
                    "recovered": 8326
                },
                {
                    "date": "2020-3-25",
                    "confirmed": 74386,
                    "deaths": 7503,
                    "recovered": 9362
                },
                {
                    "date": "2020-3-26",
                    "confirmed": 80589,
                    "deaths": 8215,
                    "recovered": 10361
                },
                {
                    "date": "2020-3-27",
                    "confirmed": 86498,
                    "deaths": 9134,
                    "recovered": 10950
                },
                {
                    "date": "2020-3-28",
                    "confirmed": 92472,
                    "deaths": 10023,
                    "recovered": 12384
                },
                {
                    "date": "2020-3-29",
                    "confirmed": 97689,
                    "deaths": 10779,
                    "recovered": 13030
                },
                {
                    "date": "2020-3-30",
                    "confirmed": 101739,
                    "deaths": 11591,
                    "recovered": 14620
                },
                {
                    "date": "2020-3-31",
                    "confirmed": 105792,
                    "deaths": 12428,
                    "recovered": 15729
                },
                {
                    "date": "2020-4-1",
                    "confirmed": 110574,
                    "deaths": 13155,
                    "recovered": 16847
                },
                {
                    "date": "2020-4-2",
                    "confirmed": 115242,
                    "deaths": 13915,
                    "recovered": 18278
                },
                {
                    "date": "2020-4-3",
                    "confirmed": 119827,
                    "deaths": 14681,
                    "recovered": 19758
                },
                {
                    "date": "2020-4-4",
                    "confirmed": 124632,
                    "deaths": 15362,
                    "recovered": 20996
                },
                {
                    "date": "2020-4-5",
                    "confirmed": 128948,
                    "deaths": 15887,
                    "recovered": 21815
                },
                {
                    "date": "2020-4-6",
                    "confirmed": 132547,
                    "deaths": 16523,
                    "recovered": 22837
                },
                {
                    "date": "2020-4-7",
                    "confirmed": 135586,
                    "deaths": 17127,
                    "recovered": 24392
                },
                {
                    "date": "2020-4-8",
                    "confirmed": 139422,
                    "deaths": 17669,
                    "recovered": 26491
                },
                {
                    "date": "2020-4-9",
                    "confirmed": 143626,
                    "deaths": 18279,
                    "recovered": 28470
                },
                {
                    "date": "2020-4-10",
                    "confirmed": 147577,
                    "deaths": 18849,
                    "recovered": 30455
                },
                {
                    "date": "2020-4-11",
                    "confirmed": 152271,
                    "deaths": 19468,
                    "recovered": 32534
                },
                {
                    "date": "2020-4-12",
                    "confirmed": 156363,
                    "deaths": 19899,
                    "recovered": 34211
                },
                {
                    "date": "2020-4-13",
                    "confirmed": 159516,
                    "deaths": 20465,
                    "recovered": 35435
                },
                {
                    "date": "2020-4-14",
                    "confirmed": 162488,
                    "deaths": 21067,
                    "recovered": 37130
                },
                {
                    "date": "2020-4-15",
                    "confirmed": 165155,
                    "deaths": 21645,
                    "recovered": 38092
                },
                {
                    "date": "2020-4-16",
                    "confirmed": 168941,
                    "deaths": 22170,
                    "recovered": 40164
                },
                {
                    "date": "2020-4-17",
                    "confirmed": 172434,
                    "deaths": 22745,
                    "recovered": 42727
                },
                {
                    "date": "2020-4-18",
                    "confirmed": 175925,
                    "deaths": 23227,
                    "recovered": 44927
                },
                {
                    "date": "2020-4-19",
                    "confirmed": 178972,
                    "deaths": 23660,
                    "recovered": 47055
                },
                {
                    "date": "2020-4-20",
                    "confirmed": 181228,
                    "deaths": 24114,
                    "recovered": 48877
                },
                {
                    "date": "2020-4-21",
                    "confirmed": 183957,
                    "deaths": 24648,
                    "recovered": 51600
                },
                {
                    "date": "2020-4-22",
                    "confirmed": 187327,
                    "deaths": 25085,
                    "recovered": 54543
                },
                {
                    "date": "2020-4-23",
                    "confirmed": 189973,
                    "deaths": 25549,
                    "recovered": 57576
                },
                {
                    "date": "2020-4-24",
                    "confirmed": 192994,
                    "deaths": 25969,
                    "recovered": 60498
                },
                {
                    "date": "2020-4-25",
                    "confirmed": 195351,
                    "deaths": 26384,
                    "recovered": 63120
                },
                {
                    "date": "2020-4-26",
                    "confirmed": 197675,
                    "deaths": 26644,
                    "recovered": 64928
                },
                {
                    "date": "2020-4-27",
                    "confirmed": 199414,
                    "deaths": 26977,
                    "recovered": 66624
                }
           ]`
    );
}


