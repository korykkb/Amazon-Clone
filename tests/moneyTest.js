import { formatCurrency } from "../scripts/utilities/money";

if (formatCurrency(2095) === '20.95') {
    console.log('passed')
} else {
    console.log('failed');
}