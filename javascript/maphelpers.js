// helperfunctions//
function percentNumber(num) {
    num=num*100
    return num.toFixed(2)+'%'

}

function percentNumvisit(num) {
    num=(Math.log(num+1))/13.4*100
  return num.toFixed(2)+'%'
}

function percentNumpre(num) {
    if (num>13.4){
        num=100;
    }else{
        num =(num)/13.4*100
    }
  return num.toFixed(2)+'%'
}
function svgbar1(num){
    width =(Math.log(num+1))/13.4*120
    return '<svg width="150px" height="12px"><rect x="2" y="1.7" width="'+width+'" rx="4.5" height="9.5" style="fill:#c22e01;"/></svg>'
}

function svgbar2(num){
    if (num>13.4){
        width=120;
    }else{
        width =(num)/13.4*120
    }

    return '<svg width="150px" height="12px"><rect x="2" y="1.7" width="'+width.toFixed(2)+'" height="9.5" rx="4.5" style="fill:#00939c;"/></svg>'
}

function svggroup1(num){
    height =(num+1)/100000
    return '<svg width="150px" height="12px"><rect x="2" y="1.7" width="'+heighth.toFixed(2)+'" rx="4.5" height="9.5" style="fill:#DC4F52;"/></svg>'
}

function svggroup2(num){
    height =(num+1)/100000
    return '<svg width="150px" height="12px"><rect x="2" y="1.7" width="'+height.toFixed(2)+'" rx="4.5" height="9.5" style="fill:#EFA020;"/></svg>'
}

function svggroup3(num){
    height =(num+1)/100000
    return '<svg width="150px" height="12px"><rect x="2" y="1.7" width="'+height.toFixed(2)+'" rx="4.5" height="9.5" style="fill:#2F7864;"/></svg>'
}
function svggroup4(num){
    height =(num+1)/100000
    return '<svg width="150px" height="12px"><rect x="2" y="1.7" width="'+height.toFixed(2)+'" rx="4.5" height="9.5" style="fill:#00AFD8;"/></svg>'
}

function round2(num){
    num = num*100
    num = num.toFixed(0)
    return num.toString()
}
function roundHour(num){
    num = num/3600
    return num.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function colorbar(num){
    if (num<0.2){
        return '#d7191c'
    } else if (num<0.4){
        return '#fdae61'
    }else if (num<0.6){
        return '#ffe405'
    }else if (num<0.8){
        return '#abdda4'
    }else {
        return '#2b83ba'
    }
}

function vibcolor(timevisit){
    if (timevisit<1097*3600){
        text = "Low"
        return '<h4 style = "color:#fdae61"><strong>'+text+'</strong></h4>'
    }else{
        text = "High"
        return '<h4 style = "color:#2b83ba"><strong>'+text+'</strong></h4>'
    }
}

function bar4group(g1, g2, g3, g4){
    // h1= g1/3600000
    // h2= g2/3600000
    // h3= g3/3600000
    // h4= g4/3600000
    const hmax = 58
    h1= g1*hmax
    h2= g2*hmax
    h3= g3*hmax
    h4= g4*hmax

    height1 = hmax-h1.toFixed(2)
    height2 = hmax-h2.toFixed(2)
    height3 = hmax-h3.toFixed(2)
    height4 = hmax-h4.toFixed(2)
    maxvalue = Math.ceil(Math.max(h1,h2,h3,h4))
    divide = Math.ceil(maxvalue/4)

return '<svg width="200" height="76">\
    <g transform="translate(0,5)">\
	<g class="x axis" transform="translate(0,60)">\
			<g class="tick" transform="translate(18.5,0)" style="opacity: 1;"><line y2="1" x2="0"></line>\
			<text dy=".71em" y="3" x="0" style="text-anchor: middle; color:#9e9e9e">$</text>\
		</g>\
			<g class="tick" transform="translate(65.5,0)" style="opacity: 1;"><line y2="1" x2="0"></line>\
			<text dy=".71em" y="3" x="0" style="text-anchor: middle;color:#9e9e9e">$$</text>\
		</g>\
			<g class="tick" transform="translate(113,0)" style="opacity: 1;"><line y2="1" x2="0"></line>\
			<text dy=".71em" y="3" x="0" style="text-anchor: middle;color:#9e9e9e">$$$</text>\
		</g>\
			<g class="tick" transform="translate(160,0)" style="opacity: 1;"><line y2="1" x2="0"></line>\
			<text dy=".71em" y="3" x="0" style="text-anchor: middle; color:#9e9e9e">$$$$</text>\
		</g>\
        <path class="domain" d="M0,6V0H900V6"></path>\
	</g>\
		<rect class="bar2" id ="rcorners1" x="3" width="30" y="'+height1 +'" height="'+h1.toFixed(2)+'"style="fill:#BDBEC0;"></rect>\
		<rect class="bar2" id ="rcorners1" x="49.5" width="30"  y="'+height2 +'" height="'+h2.toFixed(2)+'"style="fill:#BDBEC0;"></rect>\
		<rect class="bar2" id ="rcorners1" x="98" width="30"  y="'+height3 +'" height="'+h3.toFixed(2)+'"style="fill:#BDBEC0;"></rect>\
		<rect class="bar2" id ="rcorners1" x="145.5" width="30"  y="'+height4+'" height="'+h4.toFixed(2)+'"style="fill:#BDBEC0;"></rect>\
	</g>\
</svg>'
}


function getdist(){
    let streets = [];
    const filterEl = document.getElementById('feature-filter');
    const listingEl = document.getElementById('feature-listing');

    return ""
}

function renderListings(features) {
    const empty = document.createElement('p');
    // Clear any existing listings
    listingEl.innerHTML = '';
    if (features.length) {
    for (const feature of features) {
    const itemLink = document.createElement('a');
    const label = `${feature.properties.name} (${feature.properties.abbrev})`;
    itemLink.href = feature.properties.wikipedia;
    itemLink.target = '_blank';
    itemLink.textContent = label;
    itemLink.addEventListener('mouseover', () => {
    // Highlight corresponding feature on the map
    popup
    .setLngLat(feature.geometry.coordinates)
    .setText(label)
    .addTo(map);
    });
    listingEl.appendChild(itemLink);
    }
     
    // Show the filter input
    filterEl.parentNode.style.display = 'block';
    } else if (features.length === 0 && filterEl.value !== '') {
    empty.textContent = 'No results found';
    listingEl.appendChild(empty);
    } else {
    empty.textContent = 'Drag the map to populate results';
    listingEl.appendChild(empty);
     
    // Hide the filter input
    filterEl.parentNode.style.display = 'none';
     
    // remove features filter
    map.setFilter('airport', ['has', 'abbrev']);
    }
    }
