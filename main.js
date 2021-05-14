async function api_worldStat(){
    var response= await fetch("https://covid-19-data.p.rapidapi.com/totals", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d0bc844d04mshd695dcbf8d98d30p14643djsnc9c1e31dc65b",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
	}
})
    var data = await response.json();
    console.log(data);
    showWorldStat(data);
}
api_worldStat();

function showWorldStat(data)
{
    var tab_1 = 
    `<tr>
    <th class="color_cases">TOTAL CASES</th>
    <th class="color_recovered">TOTAL RECOVERED</th>
    <th class="color_deaths">TOTAL DEATHS</th>
    </tr>`;

    tab_1+=
    `<tr>
        <td class="bold">${data[0].confirmed}</td>
        <td class="bold">${data[0].recovered}</td>
        <td class="bold">${data[0].deaths}</td>
    </tr>`;
    document.getElementById("worldReport").innerHTML = tab_1;

    /*var tab_2 =
    `<tr>
        <th class="color_cases">NEW CASES</th>
        <th class="color_deaths">NEW DEATHS</th>
    </tr>`;

    tab_2+=
    `<tr>
        <td class="bold">${data.world_total.new_cases}</td>
        <td class="bold">${data.world_total.new_deaths}</td>
    </tr>`;
    document.getElementById("worldReportNew").innerHTML=tab_2;  */ 
}
async function IndianStates()
{
  var IndianStatesRes =await  fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d0bc844d04mshd695dcbf8d98d30p14643djsnc9c1e31dc65b",
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
	}
})
var dataIndianStates = await IndianStatesRes.json();
console.log(dataIndianStates);
showIndianStates(dataIndianStates);
}
IndianStates();
function showIndianStates(dataIndianStates)
{
    var tab_3=
    `<tr>
        <th class="color_cases">TOTAL CASES</th>
        <th class="color_recovered">TOTAL RECOVERED</th>
        <th class="color_deaths">TOTAL DEATHS</th>
    </tr>`;
    
    tab_3+=
    `<tr>
        <td class="bold">${dataIndianStates.total_values.confirmed}</td>
        <td class="bold">${dataIndianStates.total_values.recovered}</td>
        <td class="bold">${dataIndianStates.total_values.deaths}</td>
    </tr>`;
    document.getElementById("indianStats").innerHTML=tab_3;


    var state_1 =
    `<tr>
        <th>STATE</th>
        <th class="color_cases">TOTAL CASES</th>
        <th class="color_recovered">TOTAL RECOVERED</th>
        <th class="color_deaths">TOTAL DEATHS</th>
        <th class="color_search">DISTRICT</th>
    </tr>`;

    for(let r in dataIndianStates.state_wise)
    state_1+=
    `<tr>
        <td class="bold" id="state_font">${dataIndianStates.state_wise[r].state}</td>
        <td class="bold">${dataIndianStates.state_wise[r].confirmed}</td>
        <td class="bold">${dataIndianStates.state_wise[r].recovered}</td>
        <td class="bold">${dataIndianStates.state_wise[r].deaths}</td>
        <td><input type="text" placeholder="District Name" class="input_district"></td>
    </tr>`;
    
    document.getElementById("IndianStatesStat").innerHTML=state_1;
}