//Global variables
let basic_salary = Number(prompt("Enter basic salary"));
let benefits = Number(prompt("Enter benefits"));

// Task 15: Calculate gross salary
function calculate_gross(x, y) {
    return x + y;
}

let gross_salary = calculate_gross(basic_salary, benefits);

// Task 16: Calculate NSSF
function calculate_nssf(gross_salary) {
    const NSSF_RATE = 0.06;
    const MINIMUM = 18000;

    let nssf_base = Math.max(gross_salary, MINIMUM);
    return nssf_base * NSSF_RATE;
}

// Calculate NHIF using historical NHIF rates
function calculate_nhif(gross_salary) {
    if (gross_salary <= 0) return 0;
    if (gross_salary < 6000) return 150;
    if (gross_salary < 8000) return 300;
    if (gross_salary < 12000) return 400;
    if (gross_salary < 15000) return 500;
    if (gross_salary < 20000) return 600;
    if (gross_salary < 25000) return 750;
    if (gross_salary < 30000) return 850;
    if (gross_salary < 35000) return 900;
    if (gross_salary < 40000) return 950;
    if (gross_salary < 45000) return 1000;
    if (gross_salary < 50000) return 1100;
    if (gross_salary < 60000) return 1200;
    if (gross_salary < 70000) return 1300;
    if (gross_salary < 80000) return 1400;
    if (gross_salary < 90000) return 1500;
    if (gross_salary < 100000) return 1600;
    return 1700;
}

let nssf = calculate_nssf(gross_salary);
let nhif = calculate_nhif(gross_salary);

// Task 17: Calculate NHDF
function calculate_nhdf(gross_salary) {
    return gross_salary * 0.015;
}

let nhdf = calculate_nhdf(gross_salary);

// Task 18: Calculate taxable income
function calculate_taxable_income(gross_salary, nssf, nhdf, nhif) {
    return gross_salary - (nssf + nhdf + nhif);
}

let taxable_income = calculate_taxable_income(
    gross_salary, nssf, nhdf, nhif
);

// Task 19: Calculate PAYE
function calculate_paye(taxable_pay) {
    let tax = 0;
    let remaining = Math.max(0, taxable_pay);
    let amount;

    // First tax band: 10%
    amount = Math.min(remaining, 24000);
    tax += amount * 0.10;
    remaining -= amount;

    // Second tax band: 25%
    amount = Math.min(remaining, 8333);
    tax += amount * 0.25;
    remaining -= amount;

    // Third tax band: 30%
    amount = Math.min(remaining, 467667);
    tax += amount * 0.30;
    remaining -= amount;

    // Fourth tax band: 32.5%
    amount = Math.min(remaining, 300000);
    tax += amount * 0.325;
    remaining -= amount;

    // Fifth tax band: 35%
    tax += remaining * 0.35;

    // Deduct personal relief
    return Math.max(0, tax - 2400);
}

let paye = calculate_paye(taxable_income);

// Display the results
console.log("Gross Salary: KSh " + gross_salary.toFixed(2));
console.log("NSSF: KSh " + nssf.toFixed(2));
console.log("NHIF: KSh " + nhif.toFixed(2));
console.log("NHDF: KSh " + nhdf.toFixed(2));
console.log("Taxable Income: KSh " + taxable_income.toFixed(2));
console.log("PAYE: KSh " + paye.toFixed(2));

// Calculate net salary
let net_salary = gross_salary - nssf - nhif - nhdf - paye;

console.log("Net Salary: KSh " + net_salary.toFixed(2));