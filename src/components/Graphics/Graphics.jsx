import { Line, Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']
const beneficios = [200, 250, 20, 315, 150, 200, 75]
const perdidas = [100, 50, 280, 12, 156, 62, 234, 102]

const midata = {
    labels: meses,
    datasets: [
        {
            label: 'Beneficios',
            data: beneficios,
            tension: 0.5,
            fill: true,
            borderColor: 'rgb(99, 132, 255)',
            backgroundColor: 'rgba(99, 132, 255, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(99, 132, 255)',
            pointBackgroundColor: 'rgba(99, 132, 255, 0.5)',
        },
        {
            label: 'Perdidas',
            data: perdidas,
            tension: 0.5,
            fill: true,
            borderColor: 'rgb(255,99,132)',
            backgroundColor: 'rgba(255,99,132, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255,99,132)',
            pointBackgroundColor: 'rgba(255,99,132,0.5)',
        }
    ]
}


export const GraphBar = () => <Bar data={midata} />
export const GraphLine = () => <Line data={midata} />