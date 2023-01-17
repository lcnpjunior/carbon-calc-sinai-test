  import '../support/constants'
import { constants } from '../support/constants'
  let numberOfPeople = 3
  let zipCode = '18410'


  let currentTotal = 0
  let newTotal = 0
  let USAverage = 0

  let currentWaste = 0
  let newWaste = 0

  let currentEnergy = 0
  let newEnergy = 0

  let currentTransportation = 0
  let newTransportation = 0

class Calculations {

    wasteSavings(product){
        let savings = 0
        switch (product) {
            case product:
                savings = numberOfPeople * constants.g_NEWSPAPER_REDUCTION;
                break;
            case product:
                savings = numberOfPeople * constants.g_GLASS_REDUCTION;
                break;
            case product:
                savings = numberOfPeople * constants.g_PLASTIC_REDUCTION;
                break;
            case product:
                savings = numberOfPeople * constants.g_METAL_REDUCTION;
                break;
            case product:
                savings = numberOfPeople * constants.g_MAGAZINE_REDUCTION;
                break;
            default:
                break;
        }
        return savings;
    }
}

export const calculations = new Calculations();