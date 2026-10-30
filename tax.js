document.getElementById('tax_form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values when Submit is clicked
    let basic_salary = Number(document.getElementById("basic").value) || 0;
    let benefits = Number(document.getElementById("benefits").value) || 0;

    // Task 15: Compute gross salary
    function calculate_gross(basic, benefits) {
        return basic + benefits;
    }

    let gross_salary = calculate_gross(basic_salary, benefits);

    // Task 16: Compute NSSF
    function calculate_nssf(gross_salary) {
        const NSSF_RATE = 0.06;
        const MINIMUM = 18000;

        let nssf_base = Math.max(gross_salary, MINIMUM);
        return nssf_base * NSSF_RATE;
    }

    let nssf = calculate_nssf(gross_salary);

    // Compute NHIF
    function calculate_nhif(gross_salary) {
        if (gross_salary <= 0) {
            return 0;
        } else if (gross_salary < 6000) {
            return 150;
        } else if (gross_salary < 8000) {
            return 300;
        } else if (gross_salary < 12000) {
            return 400;
        } else if (gross_salary < 15000) {
            return 500;
        } else if (gross_salary < 20000) {
            return 600;
        } else if (gross_salary < 25000) {
            return 750;
        } else if (gross_salary < 30000) {
            return 850;
        } else if (gross_salary < 35000) {
            return 900;
        } else if (gross_salary < 40000) {
            return 950;
        } else if (gross_salary < 45000) {
            return 1000;
        } else if (gross_salary < 50000) {
            return 1100;
        } else if (gross_salary < 60000) {
            return 1200;
        } else if (gross_salary < 70000) {
            return 1300;
        } else if (gross_salary < 80000) {
            return 1400;
        } else if (gross_salary < 90000) {
            return 1500;
        } else if (gross_salary < 100000) {
            return 1600;
        } else {
            return 1700;
        }
    }

    let nhif = calculate_nhif(gross_salary);

    // Task 17: Compute NHDF
    function calculate_nhdf(gross_salary) {
        return gross_salary * 0.015;
    }

    let nhdf = calculate_nhdf(gross_salary);

    // Task 18: Compute taxable income
    function calculate_taxable_income(gross_salary, nssf, nhdf, nhif) {
        return gross_salary - (nssf + nhdf + nhif);
    }

    let taxable_income = calculate_taxable_income(
        gross_salary, nssf, nhdf, nhif
    );

    // Task 19: Compute PAYE
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

    // Compute net salary
    let net_salary = gross_salary - nssf - nhif - nhdf - paye;

    // Display results in the HTML table
    document.getElementById('gross').textContent = gross_salary.toFixed(2);
    document.getElementById('nhif').textContent = nhif.toFixed(2);
    document.getElementById('nssf').textContent = nssf.toFixed(2);
    document.getElementById('nhdf').textContent = nhdf.toFixed(2);
    document.getElementById('taxable_income').textContent = taxable_income.toFixed(2);
    document.getElementById('payee').textContent = paye.toFixed(2);
    document.getElementById('net').textContent = net_salary.toFixed(2);

    // Display results in the browser console
    console.log("Gross Salary: KSh " + gross_salary.toFixed(2));
    console.log("NSSF: KSh " + nssf.toFixed(2));
    console.log("NHIF: KSh " + nhif.toFixed(2));
    console.log("NHDF: KSh " + nhdf.toFixed(2));
    console.log("Taxable Income: KSh " + taxable_income.toFixed(2));
    console.log("PAYE: KSh " + paye.toFixed(2));
    console.log("Net Salary: KSh " + net_salary.toFixed(2));
});