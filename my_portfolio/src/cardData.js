import Double from '../src/assets/double.png'
// import Laptop from '../assets/laptop.jpg'
import Single from '../src/assets/single.png'
import Triple from '../src/assets/triple.png'


const CardData = [
    {
        icon: Single,
        title:'Single User',
        price:149,
        storage:'500 GB',
        allow:1,
        canSend:2,
        bg:'#00df9a',
        color:'#000300',
        cg:'#00000'
    },
    {
        icon: Double,
        title:'Partnership',
        price:199,
        storage:'1 TB',
        allow:3,
        canSend:10,
        bg:'#000300',
        color:'#00df9a',
        cg:100

    },
    {
        icon: Triple,
        title:'Group Account',
        price:299,
        storage:'5 TB',
        allow:10,
        canSend:20,
        bg:'#00df9a',
        color:'#000300',
        cg:'#030f65'

    }
]


export default CardData