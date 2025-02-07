function Draw(type = "bar") {
    const buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.style.color = "";
        button.style.backgroundColor = "";
    }

    document.getElementById(type).style.color = "#fff";
    document.getElementById(type).style.backgroundColor = "blue";   

    const surface = document.getElementById("draw");
    surface.innerHTML = "<div id='loader'></div>";
    const series = ['First', 'Second'];

    const serie1 = [];
    const serie2 = [];

    for (let i = 0; i < 100; i++) {
        serie1[i] = { x: i, y: Math.random() * 100 };
        serie2[i] = { x: i, y: Math.random() * 100 };
    }

    let data;

    setTimeout(() => {
    	if(type === "scatter") {
        	data = { values: [serie1, serie2], series};

        	tfvis.render.scatterplot(surface, data);
    	} else if (type === "bar") {
        	data = [];
        	for(let i = 0; i < 10; i++) {
            	data[i] = { index: i, value: Math.random() * 100 };
        	}

        	tfvis.render.barchart(surface, data);
    	} else if (type === "line") {
        	let values = [];
        	for (let i = 0; i < 10; i++) {
            		values[i] = { x: i, y: Math.random() * 100 };
        	}

        	tfvis.render.linechart(surface, {values});
    	}
    }, 200);
}

function reload() {
    location.reload();
}

Draw();