function Draw(type = "scatter") {
    const buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.style.color = "";
        button.style.backgroundColor = "";
    }

    document.getElementById(type).style.color = "#fff";
    document.getElementById(type).style.backgroundColor = "blue";   

    const surface = document.getElementById("draw");
    const series = ['First', 'Second'];

    const serie1 = [];
    const serie2 = [];

    for (let i = 0; i < 100; i++) {
        serie1[i] = { x: i, y: Math.random() * 100 };
        serie2[i] = { x: i, y: Math.random() * 100 };
    }

    let data;

    if(type === "scatter") {
        data = { values: [serie1, serie2], series};

        tfvis.render.scatterplot(surface, data);
    } else if (type === "bar") {
        data = [
            {index: 0, value: 100},
            {index: 1, value: 200},
            {index: 2, value: 150},
            {index: 2, value: 250},
        ];

        tfvis.render.barchart(surface, data);
    } else if (type === "line") {
        let values = [
            {x: 1, y: 20},
            {x: 2, y: 30},
            {x: 3, y: 5},
            {x: 4, y: 12}
        ];

        tfvis.render.linechart(surface, {values});
    }
}

Draw();