// Grab the form element
const form = document.querySelector("form");

/**
 * Calculate value.
 * @param {Number} raw
 * @returns {Number} gives back the final value.
 */
const monetize = raw => {
  // for every 5 chars in an input this increases the value by $7 for every field less than 5 each char is worth $1
  // valueby5 gives us the $1 values of the rawValue
  const valueLessThan5 = raw % 5;

  // this gives us the number of sets of 5 we have
  const valueMoreThan5 = (raw - valueLessThan5) / 5;

  // this sets the value to the sets of chars less than 5
  const finalValueLessThan5 = valueLessThan5 * 1;

  // this sets the value to the sets of chars greater than 5
  const finalValueMoreThan5 = valueMoreThan5 * 7;

  // this gives us our final value
  const finalTotal = finalValueMoreThan5 + finalValueLessThan5;

  return finalTotal;
};

/**
 * Display Value in HTML.
 * @param {Number} total
 */
const outputter = total => {
  document.querySelector("output").textContent = `$${total}`;
};

const submitHandler = e => {
  e.preventDefault();

  // get all lengths from values of input fields
  const fnameValue = document.querySelector("#fname").value.length;
  const lnameValue = document.querySelector("#lname").value.length;
  const bmonthValue = document.querySelector("#bmonth").value.length;
  const bdayValue = document.querySelector("#bday").value.length;

  const rawValue = fnameValue + lnameValue + bmonthValue + bdayValue;

  const finalValue = monetize(rawValue);

  outputter(finalValue);
};

// Listen for a submit event on the form
form.addEventListener("submit", submitHandler);
