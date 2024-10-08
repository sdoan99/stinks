const chartOptions = {
    layout: {
        textColor: 'black',
        background: { type: 'solid', color: 'white' },
    },
    height: 400,
};

function createStockChart() {
    const container = document.getElementById('stock-chart-container');
    const chart = LightweightCharts.createChart(container, chartOptions);

    window.addEventListener('resize', () => {
        chart.applyOptions({ width: container.clientWidth });
    });

    const intervalColors = {
        '1D': '#2962FF',
        '1W': 'rgb(225, 87, 90)',
        '1M': 'rgb(242, 142, 44)',
        '1Y': 'rgb(164, 89, 209)',
    };

    const lineSeries = chart.addLineSeries({ color: intervalColors['1D'] });

    function fetchData() {
        return fetch('/DataDataData/alphavantage_data.json')
            .then(response => response.json())
            .then(data => {
                const timeSeries = data['Time Series (Daily)'];
                return Object.entries(timeSeries).map(([date, values]) => ({
                    time: date,
                    value: parseFloat(values['4. close'])
                })).reverse();
            })
            .catch(error => {
                console.error('Error fetching AlphaVantage data:', error);
                return [];
            });
    }

    function setChartInterval(interval) {
        fetchData().then(data => {
            let filteredData;
            const currentDate = new Date();
            
            switch(interval) {
                case '1D':
                    filteredData = data.slice(-1);
                    break;
                case '1W':
                    filteredData = data.slice(-7);
                    break;
                case '1M':
                    filteredData = data.slice(-30);
                    break;
                case '1Y':
                    filteredData = data.slice(-365);
                    break;
                default:
                    filteredData = data;
            }

            lineSeries.setData(filteredData);
            lineSeries.applyOptions({
                color: intervalColors[interval],
            });
            chart.timeScale().fitContent();
        });
    }

    setChartInterval('1M');

    const buttonsContainer = createButtonsContainer(container);
    const intervals = ['1D', '1W', '1M', '1Y'];
    intervals.forEach(interval => {
        const button = document.createElement('button');
        button.innerText = interval;
        button.addEventListener('click', () => setChartInterval(interval));
        buttonsContainer.appendChild(button);
    });
}

function createButtonsContainer(container) {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');
    container.appendChild(buttonsContainer);
    return buttonsContainer;
}

// Styles
const styles = `
    .buttons-container {
        display: flex;
        flex-direction: row;
        gap: 8px;
        margin-top: 10px;
    }
    .buttons-container button {
        all: initial;
        font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu,
            sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 510;
        line-height: 24px;
        letter-spacing: -0.32px;
        padding: 8px 24px;
        color: rgba(19, 23, 34, 1);
        background-color: rgba(240, 243, 250, 1);
        border-radius: 8px;
        cursor: pointer;
    }

    .buttons-container button:hover {
        background-color: rgba(224, 227, 235, 1);
    }

    .buttons-container button:active {
        background-color: rgba(209, 212, 220, 1);
    }
`;

const stylesElement = document.createElement('style');
stylesElement.innerHTML = styles;
document.head.appendChild(stylesElement);

// Create the stock chart when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createStockChart);