import earth from '../images/earth.jpeg'
import hell from '../images/hell.jpg'
import heaven from '../images/heaven.jpg'

function imageSelector(type) {
    switch (type) {
        case ('heaven'):
            return heaven
        case ('earth'):
            return earth
        case ('hell'):
            return earth
        default:
            return null
    }
}

export default imageSelector