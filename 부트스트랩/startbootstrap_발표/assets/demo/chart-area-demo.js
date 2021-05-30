// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

let data1_1 = [25209.9013812971,20079.9229340934,19371.9423165348,20049.7983820457,17766.9009139797,20102.7702690111,19666.2324999005,25016.6283104771,26135.3140181005,18780.3139943053,21564.6526997755,16631.2782711997,20012.9484415712,18393.053343927,32419.0604566319,22678.0299547857,18488.1209685984,22256.8787251575,21452.4443780753,22105.127977136,20698.4032112932,18984.8020991945,20988.3385151153,39038.7875225634,19275.9927392674];
let data1_2 = [6509465.0578919,2905516.13286667,1802926.05118387,1878718.69273201,2589460.7551016,2832961.31586782,2136137.93988573,2052282.94329211,1782097.37998761,1720355.51361868,2668816.86843184,2749745.37094415,3388063.27182718,2755019.6261661,4503833.54299033,3028234.23612197,2288682.85917858,3950310.45997554,2525026.987396,2875219.99719469,4402773.8773527,2200398.74700465,4418588.86430192,6749444.16066361,1990865.16510498];
let data1_3 = [10922717.8744162,6100849.74749893,3816185.73357932,4840942.71732744,4412489.85347977,5659613.19054694,4369687.51154736,3851044.30075956,4557309.50731441,3785595.08868599,4898017.66108585,5813649.39388341,6515584.24654455,5112701.31292893,9800267.81844093,6859564.25593658,4801741.20193786,7859093.35543629,5457806.31272721,5401757.1277264,8562023.52570823,4200266.81511789,6123939.70566177,6394381.40858187,3953486.02475023];

let data2_1 = [24692.5883445781,19768.5627722405,16931.3152670997,19295.8426986106,17177.3196096095,19310.6964860029,18098.4321364167,23904.7540088023,23283.6532794284,17789.6097276935,18504.4806618356,14352.0177734631,19627.9569077767,17356.3131043073,30417.3690022631,22468.8953678378,15082.4637184838,22444.126138782,20682.3839670136,21779.7419802839,17742.0866610708,17655.7659135733,19984.2907471723,35098.5986714947,15721.8515147825]
let data2_2 = [6858561.58697741,3022526.76918044,1901528.58077063,1965369.2812269,2687529.27580894,3022757.18739695,2243838.07740956,2131341.76776173,1846068.71394346,1817729.30853828,2715235.60704056,2897405.86219832,3808679.65256002,2719388.5694952,4689127.26865624,3147130.46747835,2371471.73061197,4108487.47290037,2617157.35767536,2978597.47564631,4746561.23456159,2317954.18694779,4660476.60122572,7095595.59085796,2109693.99707912]
let data2_3 = [12495257.0892325,6727917.04320912,4061268.29397746,5264022.74748873,4822305.65727965,6158008.94099577,4701971.05704771,4138216.70871837,5003006.76472695,4044458.68222451,5384348.93774745,6398018.48515439,7593645.6249894,5684676.66588944,10745608.2314837,7838593.98380883,5243501.09987727,8806418.36121816,6213244.01795884,6256459.83769661,9507593.72672703,4677591.01897627,6374739.24706521,7129098.43300749,4254051.21451181]

let data3_1 = [25128.0240744242,20021.0024074211,16017.2667402949,19108.5038131959,17084.3074112557,19274.2613964047,17361.8364334638,24816.3145744387,22560.3881819529,17934.1936976485,17812.5877056617,13470.0357336734,20019.7493643255,16835.6462335888,32393.0178929404,22916.5716030376,13675.9600691566,22148.7796462978,21146.4184981154,22368.25228934,16455.9132419516,18353.7599601065,20032.0997988622,34868.9112755173,14564.1923829487]
let data3_2 = [7322618.46181448,3115327.3060416,2039619.6195506,2091451.36908751,2865779.87195931,3219182.57837627,2336804.36867341,2260769.47216269,1991019.36986432,1908753.46806826,2861486.09568758,3069994.2661345,4274835.6173849,2903736.53524438,5000568.34823793,3205793.92463203,2514381.97925447,4329897.19090684,2750573.43286114,3121351.17340904,5182236.30669326,2504751.37001403,4964960.34168187,7498238.82983129,2278664.61626307]
let data3_3 = [13563560.5544237,7064271.49013692,4444934.53437006,5866482.61682193,5361869.91120489,6702014.06004084,5206709.15367791,4493860.60819502,5586031.98111023,4399260.43520606,5882830.72579245,7199417.40783545,8468503.21271564,6201554.36744063,11938452.2933252,9223793.89611481,5616587.11855547,9703070.97874047,6716891.34579094,7247775.27304312,10595207.5258736,5239966.40508726,7006975.15528209,7788076.30406441,4612232.85750036]

let data4_1 = [24334.8669244799,18616.7589131968,17850.7007699399,18241.3217822505,14139.2297682747,17397.7217887342,17746.00452548,21972.4159027106,18674.9283396486,16329.9581158299,19973.6431318318,14162.6339301593,19099.4246634335,16617.9928674636,24479.2851035771,19552.0107867829,15778.6895949837,21504.5298158828,19080.5205062104,20301.1260929639,20298.3660363213,16338.9324723006,20899.569177422,36078.8621211592,16412.5301044871]
let data4_2 = [8578960.02172291,3249616.46611162,2188503.83358644,2263704.01154068,3179965.50645287,3494957.1988424,2479482.0562479,2389616.74249227,2139785.46593953,2037798.3667458,3056321.63685937,3384477.70750195,4885071.85028021,3124818.94112319,5510579.15311445,3666081.15283595,2690745.87081232,4711172.4314017,2908760.03055638,3456669.10157026,5636683.16489636,2679343.76477934,5254778.60935092,8628861.46061497,2443446.54274996]
let data4_3 = [16832518.6169021,8335432.64484074,4831798.47314309,6298215.00691649,5906064.86885504,7772552.91558343,6007427.00978676,5074080.41466199,6374813.05283005,4889395.56784522,7242262.95046872,8659042.9645103,9969349.7185221,7374424.78675286,13977027.097246,10954247.1699023,6531544.79705983,11824836.0415179,8185988.94153159,8672789.45506196,12325792.4411471,5714319.83234206,7717699.58425603,9194976.24280707,5179600.47716947]

data1_1 = trans(data1_1);
data1_2 = trans(data1_2);
data1_3 = trans(data1_3);
data2_1 = trans(data2_1);
data2_2 = trans(data2_2);
data2_3 = trans(data2_3);
data3_1 = trans(data3_1);
data3_2 = trans(data3_2);
data3_3 = trans(data3_3);
data4_1 = trans(data4_1);
data4_2 = trans(data4_2);
data4_3 = trans(data4_3);

// Area Chart Example
var ctx2_1 = document.getElementById("myAreaChart2-1");
var ctx2_2 = document.getElementById("myAreaChart2-2");
var ctx2_3 = document.getElementById("myAreaChart2-3");
var ctx2_4 = document.getElementById("myAreaChart2-4");


var myLineChart = new Chart(ctx2_1, {
  type: 'line',
  data: {
    labels: ["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"]
    ,
    datasets: [{
      label: "매출평균",
      lineTension: 0.1,
      backgroundColor: "rgba(2,117,216,0)",
      borderColor: "rgba(255,0,0,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: data1_1
,
    } ,{
      label: "공시지가",
      lineTension: 0.1,
      backgroundColor: "rgba(2,117,216,0)",
      borderColor: "rgba(0,162,232,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: data1_2
,
    },{
      label: "실거래가",
      lineTension: 0.1,
      backgroundColor: "rgba(2,117,216,0)",
      borderColor: "rgba(0,0,128,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: data1_3
,
    },],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true
    }
  }
});

    // 
var myLineChart = new Chart(ctx2_2, {
  type: 'line',
  data: {
    labels: ["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"]
    ,
    datasets: [{
      label: "매출평균",
      lineTension: 0.1,
      backgroundColor: "rgba(2,117,216,0)",
      borderColor: "rgba(255,0,0,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: data2_1
,
    } ,{
      label: "공시지가",
      lineTension: 0.1,
      backgroundColor: "rgba(2,117,216,0)",
      borderColor: "rgba(0,162,232,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: data2_2
,
    },{
      label: "실거래가",
      lineTension: 0.1,
      backgroundColor: "rgba(2,117,216,0)",
      borderColor: "rgba(0,0,128,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: data2_3
,
    },],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true
    }
  }

});

var myLineChart = new Chart(ctx2_3, {
  type: 'line',
  data: {
    labels: ["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"]
    ,
    datasets: [{
      label: "매출평균",
      lineTension: 0.1,
      backgroundColor: "rgba(2,117,216,0)",
      borderColor: "rgba(255,0,0,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: data3_1
,
    } ,{
      label: "공시지가",
      lineTension: 0.1,
      backgroundColor: "rgba(2,117,216,0)",
      borderColor: "rgba(0,162,232,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: data3_2
,
    },{
      label: "실거래가",
      lineTension: 0.1,
      backgroundColor: "rgba(2,117,216,0)",
      borderColor: "rgba(0,0,128,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: data3_3
,
    },],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true
    }
  }
});

var myLineChart = new Chart(ctx2_4, {
  type: 'line',
  data: {
    labels: ["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"]
    ,
    datasets: [{
      label: "매출평균",
      lineTension: 0.1,
      backgroundColor: "rgba(2,117,216,0)",
      borderColor: "rgba(255,0,0,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: data4_1
,
    } ,{
      label: "공시지가",
      lineTension: 0.1,
      backgroundColor: "rgba(2,117,216,0)",
      borderColor: "rgba(0,162,232,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: data4_2
,
    },{
      label: "실거래가",
      lineTension: 0.1,
      backgroundColor: "rgba(2,117,216,0)",
      borderColor: "rgba(0,0,128,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: data4_3
,
    },],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true
    }
  }
});

function trans(char1) {
  let char_min = char1[0];
  let char_max = char1[0];

  for(let i = 0; i < char1.length; i++) {
      if(char1[i] < char_min) {
          char_min = char1[i]
      }
      if(char1[i] > char_max) {
          char_max = char1[i]
      }
  }
  for(let i = 0; i < char1.length; i++) {
      char1[i] = Math.floor(((char1[i]-char_min)/(char_max-char_min))*100);
  }
  return char1;
}