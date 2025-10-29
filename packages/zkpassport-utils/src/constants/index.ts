import type { CountryEntry, CountryName } from "../types/countries";
import { COUNTRY_SYNONYMS } from "./country-synonyms";

/**
 * List of countries and territories that are part of Africa.
 */
const AFRICA: CountryEntry[] = [
  { name: "Algeria" },
  { name: "Angola" },
  { name: "Benin" },
  { name: "Botswana" },
  { name: "British Indian Ocean Territory" },
  { name: "Burkina Faso" },
  { name: "Burundi" },
  { name: "Cameroon" },
  { name: "Cape Verde", synonyms: COUNTRY_SYNONYMS["Cape Verde"] },
  { name: "Central African Republic" },
  { name: "Chad" },
  { name: "Comoros" },
  { name: "Democratic Republic of the Congo", synonyms: COUNTRY_SYNONYMS["Democratic Republic of the Congo"] },
  { name: "Djibouti" },
  { name: "Egypt" },
  { name: "Equatorial Guinea" },
  { name: "Eritrea" },
  { name: "Eswatini", synonyms: COUNTRY_SYNONYMS["Eswatini"] },
  { name: "Ethiopia" },
  { name: "French Southern Territories", synonyms: COUNTRY_SYNONYMS["French Southern Territories"] },
  { name: "Gabon" },
  { name: "Gambia", synonyms: COUNTRY_SYNONYMS["Gambia"] },
  { name: "Ghana" },
  { name: "Guinea-Bissau" },
  { name: "Guinea" },
  { name: "Ivory Coast", synonyms: COUNTRY_SYNONYMS["Ivory Coast"] },
  { name: "Kenya" },
  { name: "Lesotho" },
  { name: "Liberia" },
  { name: "Libya" },
  { name: "Madagascar" },
  { name: "Malawi" },
  { name: "Mali" },
  { name: "Mauritania" },
  { name: "Mauritius" },
  { name: "Mayotte" },
  { name: "Morocco" },
  { name: "Mozambique" },
  { name: "Namibia" },
  { name: "Niger" },
  { name: "Nigeria" },
  { name: "Republic of the Congo", synonyms: COUNTRY_SYNONYMS["Republic of the Congo"] },
  { name: "Reunion", synonyms: COUNTRY_SYNONYMS["Reunion"] },
  { name: "Rwanda" },
  { name: "Saint Helena", synonyms: COUNTRY_SYNONYMS["Saint Helena"] },
  { name: "Sao Tome and Principe" },
  { name: "Senegal" },
  { name: "Seychelles" },
  { name: "Sierra Leone" },
  { name: "Somalia" },
  { name: "South Africa" },
  { name: "South Sudan" },
  { name: "Sudan" },
  { name: "Tanzania", synonyms: COUNTRY_SYNONYMS["Tanzania"] },
  { name: "Togo" },
  { name: "Tunisia" },
  { name: "Uganda" },
  { name: "Western Sahara", synonyms: COUNTRY_SYNONYMS["Western Sahara"] },
  { name: "Zambia" },
  { name: "Zimbabwe" }
]

/**
 * List of countries and territories that are part of Eastern Africa.
 */
const EASTERN_AFRICA: CountryEntry[] = [
  { name: "British Indian Ocean Territory" },
  { name: "Burundi" },
  { name: "Comoros" },
  { name: "Djibouti" },
  { name: "Eritrea" },
  { name: "Ethiopia" },
  { name: "French Southern Territories", synonyms: COUNTRY_SYNONYMS["French Southern Territories"] },
  { name: "Kenya" },
  { name: "Madagascar" },
  { name: "Malawi" },
  { name: "Mauritius" },
  { name: "Mayotte" },
  { name: "Mozambique" },
  { name: "Reunion", synonyms: COUNTRY_SYNONYMS["Reunion"] },
  { name: "Rwanda" },
  { name: "Seychelles" },
  { name: "Somalia" },
  { name: "South Sudan" },
  { name: "Tanzania", synonyms: COUNTRY_SYNONYMS["Tanzania"] },
  { name: "Uganda" },
  { name: "Zambia" },
  { name: "Zimbabwe" }
]

/**
 * List of countries and territories that are part of Middle Africa.
 */
const MIDDLE_AFRICA: CountryEntry[] = [
  { name: "Angola" },
  { name: "Cameroon" },
  { name: "Central African Republic" },
  { name: "Chad" },
  { name: "Democratic Republic of the Congo", synonyms: COUNTRY_SYNONYMS["Democratic Republic of the Congo"] },
  { name: "Equatorial Guinea" },
  { name: "Gabon" },
  { name: "Republic of the Congo", synonyms: COUNTRY_SYNONYMS["Republic of the Congo"] },
  { name: "Sao Tome and Principe" }
]

/**
 * List of countries and territories that are part of Northern Africa.
 */
const NORTHERN_AFRICA: CountryEntry[] = [
  { name: "Algeria" },
  { name: "Egypt" },
  { name: "Libya" },
  { name: "Morocco" },
  { name: "Sudan" },
  { name: "Tunisia" },
  { name: "Western Sahara", synonyms: COUNTRY_SYNONYMS["Western Sahara"] }
]

/**
 * List of countries and territories that are part of Southern Africa.
 */
const SOUTHERN_AFRICA: CountryEntry[] = [
  { name: "Botswana" },
  { name: "Eswatini", synonyms: COUNTRY_SYNONYMS["Eswatini"] },
  { name: "Lesotho" },
  { name: "Namibia" },
  { name: "South Africa" }
]

/**
 * List of countries and territories that are part of Western Africa.
 */
const WESTERN_AFRICA: CountryEntry[] = [
  { name: "Benin" },
  { name: "Burkina Faso" },
  { name: "Cape Verde", synonyms: COUNTRY_SYNONYMS["Cape Verde"] },
  { name: "Gambia", synonyms: COUNTRY_SYNONYMS["Gambia"] },
  { name: "Ghana" },
  { name: "Guinea-Bissau" },
  { name: "Guinea" },
  { name: "Ivory Coast", synonyms: COUNTRY_SYNONYMS["Ivory Coast"] },
  { name: "Liberia" },
  { name: "Mali" },
  { name: "Mauritania" },
  { name: "Niger" },
  { name: "Nigeria" },
  { name: "Saint Helena", synonyms: COUNTRY_SYNONYMS["Saint Helena"] },
  { name: "Senegal" },
  { name: "Sierra Leone" },
  { name: "Togo" }
]

/**
 * List of countries and territories that are part of the Americas. 
 */
const AMERICAS: CountryEntry[] = [
  { name: "Anguilla" },
  { name: "Antigua and Barbuda" },
  { name: "Argentina" },
  { name: "Aruba" },
  { name: "Bahamas", synonyms: COUNTRY_SYNONYMS["Bahamas"] },
  { name: "Barbados" },
  { name: "Belize" },
  { name: "Bermuda" },
  { name: "Bolivia", synonyms: COUNTRY_SYNONYMS["Bolivia"] },
  { name: "Bouvet Island" },
  { name: "Brazil" },
  { name: "British Virgin Islands", synonyms: COUNTRY_SYNONYMS["British Virgin Islands"] },
  { name: "Canada" },
  { name: "Caribbean Netherlands", synonyms: COUNTRY_SYNONYMS["Caribbean Netherlands"] },
  { name: "Cayman Islands" },
  { name: "Chile" },
  { name: "Colombia" },
  { name: "Costa Rica" },
  { name: "Cuba" },
  { name: "Curacao", synonyms: COUNTRY_SYNONYMS["Curacao"] },
  { name: "Dominica" },
  { name: "Dominican Republic" },
  { name: "Ecuador" },
  { name: "El Salvador" },
  { name: "Falkland Islands", synonyms: COUNTRY_SYNONYMS["Falkland Islands"] },
  { name: "French Guiana" },
  { name: "Greenland" },
  { name: "Grenada" },
  { name: "Guadeloupe" },
  { name: "Guatemala" },
  { name: "Guyana" },
  { name: "Haiti" },
  { name: "Honduras" },
  { name: "Jamaica" },
  { name: "Martinique" },
  { name: "Mexico" },
  { name: "Montserrat" },
  { name: "Nicaragua" },
  { name: "Panama" },
  { name: "Paraguay" },
  { name: "Peru" },
  { name: "Puerto Rico" },
  { name: "Saint Barthelemy", synonyms: COUNTRY_SYNONYMS["Saint Barthelemy"] },
  { name: "Saint Kitts and Nevis" },
  { name: "Saint Lucia" },
  { name: "Saint Martin", synonyms: COUNTRY_SYNONYMS["Saint Martin"] },
  { name: "Saint Pierre and Miquelon" },
  { name: "Saint Vincent and the Grenadines" },
  { name: "Sint Maarten", synonyms: COUNTRY_SYNONYMS["Sint Maarten"] },
  { name: "South Georgia and the South Sandwich Islands" },
  { name: "Suriname" },
  { name: "Trinidad and Tobago" },
  { name: "Turks and Caicos Islands" },
  { name: "United States", synonyms: COUNTRY_SYNONYMS["United States"] },
  { name: "Uruguay" },
  { name: "US Virgin Islands", synonyms: COUNTRY_SYNONYMS["US Virgin Islands"] },
  { name: "Venezuela", synonyms: COUNTRY_SYNONYMS["Venezuela"] }
]

/**
 * List of countries and territories that are part of the Caribbean.
 */
const CARIBBEAN: CountryEntry[] = [
  { name: "Anguilla" },
  { name: "Antigua and Barbuda" },
  { name: "Aruba" },
  { name: "Bahamas", synonyms: COUNTRY_SYNONYMS["Bahamas"] },
  { name: "Barbados" },
  { name: "British Virgin Islands", synonyms: COUNTRY_SYNONYMS["British Virgin Islands"] },
  { name: "Caribbean Netherlands", synonyms: COUNTRY_SYNONYMS["Caribbean Netherlands"] },
  { name: "Cayman Islands" },
  { name: "Cuba" },
  { name: "Curacao", synonyms: COUNTRY_SYNONYMS["Curacao"] },
  { name: "Dominica" },
  { name: "Dominican Republic" },
  { name: "Grenada" },
  { name: "Guadeloupe" },
  { name: "Haiti" },
  { name: "Jamaica" },
  { name: "Martinique" },
  { name: "Montserrat" },
  { name: "Puerto Rico" },
  { name: "Saint Barthelemy", synonyms: COUNTRY_SYNONYMS["Saint Barthelemy"] },
  { name: "Saint Kitts and Nevis" },
  { name: "Saint Lucia" },
  { name: "Saint Martin", synonyms: COUNTRY_SYNONYMS["Saint Martin"] },
  { name: "Saint Vincent and the Grenadines" },
  { name: "Sint Maarten", synonyms: COUNTRY_SYNONYMS["Sint Maarten"] },
  { name: "Trinidad and Tobago" },
  { name: "Turks and Caicos Islands" },
  { name: "US Virgin Islands", synonyms: COUNTRY_SYNONYMS["US Virgin Islands"] }
]

/**
 * List of countries and territories that are part of Central America.
 */
const CENTRAL_AMERICA: CountryEntry[] = [
  { name: "Belize" },
  { name: "Costa Rica" },
  { name: "El Salvador" },
  { name: "Guatemala" },
  { name: "Honduras" },
  { name: "Mexico" },
  { name: "Nicaragua" },
  { name: "Panama" }
]

/**
 * List of countries and territories that are part of Northern America.
 */
const NORTHERN_AMERICA: CountryEntry[] = [
  { name: "Bermuda" },
  { name: "Canada" },
  { name: "Greenland" },
  { name: "Saint Pierre and Miquelon" },
  { name: "United States", synonyms: COUNTRY_SYNONYMS["United States"] }
]

/**
 * List of countries and territories that are part of South America.
 */
const SOUTH_AMERICA: CountryEntry[] = [
  { name: "Argentina" },
  { name: "Bolivia", synonyms: COUNTRY_SYNONYMS["Bolivia"] },
  { name: "Bouvet Island" },
  { name: "Brazil" },
  { name: "Chile" },
  { name: "Colombia" },
  { name: "Ecuador" },
  { name: "Falkland Islands", synonyms: COUNTRY_SYNONYMS["Falkland Islands"] },
  { name: "French Guiana" },
  { name: "Guyana" },
  { name: "Paraguay" },
  { name: "Peru" },
  { name: "South Georgia and the South Sandwich Islands" },
  { name: "Suriname" },
  { name: "Uruguay" },
  { name: "Venezuela", synonyms: COUNTRY_SYNONYMS["Venezuela"] }
]

/**
 * List of countries and territories that are part of Antarctica.
 */
const ANTARCTICA: CountryEntry[] = [
  { name: "Antarctica" }
]

/**
 * List of countries and territories that are part of Asia (Taiwan amended).
 */
const ASIA: CountryEntry[] = [
  { name: "Afghanistan" },
  { name: "Armenia" },
  { name: "Azerbaijan" },
  { name: "Bahrain" },
  { name: "Bangladesh" },
  { name: "Bhutan" },
  { name: "Brunei", synonyms: COUNTRY_SYNONYMS["Brunei"] },
  { name: "Cambodia" },
  { name: "China", synonyms: COUNTRY_SYNONYMS["China"] },
  { name: "Cyprus" },
  { name: "Georgia" },
  { name: "Hong Kong", synonyms: COUNTRY_SYNONYMS["Hong Kong"] },
  { name: "India" },
  { name: "Indonesia" },
  { name: "Iran", synonyms: COUNTRY_SYNONYMS["Iran"] },
  { name: "Iraq" },
  { name: "Israel" },
  { name: "Japan" },
  { name: "Jordan" },
  { name: "Kazakhstan" },
  { name: "Kuwait" },
  { name: "Kyrgyzstan" },
  { name: "Laos", synonyms: COUNTRY_SYNONYMS["Laos"] },
  { name: "Lebanon" },
  { name: "Macau", synonyms: COUNTRY_SYNONYMS["Macau"] },
  { name: "Malaysia" },
  { name: "Maldives" },
  { name: "Mongolia" },
  { name: "Myanmar" },
  { name: "Nepal" },
  { name: "North Korea", synonyms: COUNTRY_SYNONYMS["North Korea"] },
  { name: "Oman" },
  { name: "Pakistan" },
  { name: "Palestine", synonyms: COUNTRY_SYNONYMS["Palestine"] },
  { name: "Philippines" },
  { name: "Qatar" },
  { name: "Saudi Arabia" },
  { name: "Singapore" },
  { name: "South Korea", synonyms: COUNTRY_SYNONYMS["South Korea"] },
  { name: "Sri Lanka" },
  { name: "Syria", synonyms: COUNTRY_SYNONYMS["Syria"] },
  { name: "Taiwan", synonyms: COUNTRY_SYNONYMS["Taiwan"] },
  { name: "Tajikistan" },
  { name: "Thailand" },
  { name: "Timor-Leste" },
  { name: "Turkey", synonyms: COUNTRY_SYNONYMS["Turkey"] },
  { name: "Turkmenistan" },
  { name: "United Arab Emirates", synonyms: COUNTRY_SYNONYMS["United Arab Emirates"] },
  { name: "Uzbekistan" },
  { name: "Vietnam", synonyms: COUNTRY_SYNONYMS["Vietnam"] },
  { name: "Yemen" }
]

/**
 * List of countries and territories that are part of Central Asia.
 */
const CENTRAL_ASIA: CountryEntry[] = [
  { name: "Kazakhstan" },
  { name: "Kyrgyzstan" },
  { name: "Tajikistan" },
  { name: "Turkmenistan" },
  { name: "Uzbekistan" }
]

/**
 * List of countries and territories that are part of Eastern Asia (Taiwan amended).
 */
const EASTERN_ASIA: CountryEntry[] = [
  { name: "China", synonyms: COUNTRY_SYNONYMS["China"] },
  { name: "Hong Kong", synonyms: COUNTRY_SYNONYMS["Hong Kong"] },
  { name: "Japan" },
  { name: "Macau", synonyms: COUNTRY_SYNONYMS["Macau"] },
  { name: "Mongolia" },
  { name: "North Korea", synonyms: COUNTRY_SYNONYMS["North Korea"] },
  { name: "South Korea", synonyms: COUNTRY_SYNONYMS["South Korea"] },
  { name: "Taiwan", synonyms: COUNTRY_SYNONYMS["Taiwan"] }
]

/**
 * List of countries and territories that are part of Southeastern Asia.
 */
const SOUTHEASTERN_ASIA: CountryEntry[] = [
  { name: "Brunei", synonyms: COUNTRY_SYNONYMS["Brunei"] },
  { name: "Cambodia" },
  { name: "Indonesia" },
  { name: "Laos", synonyms: COUNTRY_SYNONYMS["Laos"] },
  { name: "Malaysia" },
  { name: "Myanmar" },
  { name: "Philippines" },
  { name: "Singapore" },
  { name: "Thailand" },
  { name: "Timor-Leste" },
  { name: "Vietnam", synonyms: COUNTRY_SYNONYMS["Vietnam"] }
]

/**
 * List of countries and territories that are part of Southern Asia.
 */
const SOUTHERN_ASIA: CountryEntry[] = [
  { name: "Afghanistan" },
  { name: "Bangladesh" },
  { name: "Bhutan" },
  { name: "India" },
  { name: "Iran", synonyms: COUNTRY_SYNONYMS["Iran"] },
  { name: "Maldives" },
  { name: "Nepal" },
  { name: "Pakistan" },
  { name: "Sri Lanka" }
]

/**
 * List of countries and territories that are part of Western Asia.
 */
const WESTERN_ASIA: CountryEntry[] = [
  { name: "Armenia" },
  { name: "Azerbaijan" },
  { name: "Bahrain" },
  { name: "Cyprus" },
  { name: "Georgia" },
  { name: "Iraq" },
  { name: "Israel" },
  { name: "Jordan" },
  { name: "Kuwait" },
  { name: "Lebanon" },
  { name: "Oman" },
  { name: "Palestine", synonyms: COUNTRY_SYNONYMS["Palestine"] },
  { name: "Qatar" },
  { name: "Saudi Arabia" },
  { name: "Syria", synonyms: COUNTRY_SYNONYMS["Syria"] },
  { name: "Turkey", synonyms: COUNTRY_SYNONYMS["Turkey"] },
  { name: "United Arab Emirates", synonyms: COUNTRY_SYNONYMS["United Arab Emirates"] },
  { name: "Yemen" }
]

/**
 * List of countries and territories that are part of Europe (Kosovo amended).
 */
const EUROPE: CountryEntry[] = [
  { name: "Aland Islands", synonyms: COUNTRY_SYNONYMS["Aland Islands"] },
  { name: "Albania" },
  { name: "Andorra" },
  { name: "Austria" },
  { name: "Belarus" },
  { name: "Belgium" },
  { name: "Bosnia and Herzegovina" },
  { name: "Bulgaria" },
  { name: "Croatia" },
  { name: "Czechia", synonyms: COUNTRY_SYNONYMS["Czechia"] },
  { name: "Denmark" },
  { name: "Estonia" },
  { name: "Faroe Islands" },
  { name: "Finland" },
  { name: "France" },
  { name: "Germany" },
  { name: "Gibraltar" },
  { name: "Greece" },
  { name: "Guernsey" },
  { name: "Hungary" },
  { name: "Iceland" },
  { name: "Ireland" },
  { name: "Isle of Man" },
  { name: "Italy" },
  { name: "Jersey" },
  { name: "Kosovo" },
  { name: "Latvia" },
  { name: "Liechtenstein" },
  { name: "Lithuania" },
  { name: "Luxembourg" },
  { name: "Malta" },
  { name: "Moldova", synonyms: COUNTRY_SYNONYMS["Moldova"] },
  { name: "Monaco" },
  { name: "Montenegro" },
  { name: "Netherlands", synonyms: COUNTRY_SYNONYMS["Netherlands"] },
  { name: "North Macedonia", synonyms: COUNTRY_SYNONYMS["North Macedonia"] },
  { name: "Norway" },
  { name: "Poland" },
  { name: "Portugal" },
  { name: "Romania" },
  { name: "Russia", synonyms: COUNTRY_SYNONYMS["Russia"] },
  { name: "San Marino" },
  { name: "Serbia" },
  { name: "Slovakia" },
  { name: "Slovenia" },
  { name: "Spain" },
  { name: "Svalbard and Jan Mayen", synonyms: COUNTRY_SYNONYMS["Svalbard and Jan Mayen"] },
  { name: "Sweden" },
  { name: "Switzerland" },
  { name: "Ukraine" },
  { name: "United Kingdom", synonyms: COUNTRY_SYNONYMS["United Kingdom"] },
  { name: "Vatican City", synonyms: COUNTRY_SYNONYMS["Vatican City"] }
]

/**
 * List of countries and territories that are part of Eastern Europe.
 */
const EASTERN_EUROPE: CountryEntry[] = [
  { name: "Belarus" },
  { name: "Bulgaria" },
  { name: "Czechia", synonyms: COUNTRY_SYNONYMS["Czechia"] },
  { name: "Hungary" },
  { name: "Moldova", synonyms: COUNTRY_SYNONYMS["Moldova"] },
  { name: "Poland" },
  { name: "Romania" },
  { name: "Russia", synonyms: COUNTRY_SYNONYMS["Russia"] },
  { name: "Slovakia" },
  { name: "Ukraine" }
]

/**
 * List of countries and territories that are part of Northern Europe.
 */
const NORTHERN_EUROPE: CountryEntry[] = [
  { name: "Aland Islands", synonyms: COUNTRY_SYNONYMS["Aland Islands"] },
  { name: "Denmark" },
  { name: "Estonia" },
  { name: "Faroe Islands" },
  { name: "Finland" },
  { name: "Guernsey" },
  { name: "Iceland" },
  { name: "Ireland" },
  { name: "Isle of Man" },
  { name: "Jersey" },
  { name: "Latvia" },
  { name: "Lithuania" },
  { name: "Norway" },
  { name: "Svalbard and Jan Mayen", synonyms: COUNTRY_SYNONYMS["Svalbard and Jan Mayen"] },
  { name: "Sweden" },
  { name: "United Kingdom", synonyms: COUNTRY_SYNONYMS["United Kingdom"] }
]

/**
 * List of countries and territories that are part of Southern Europe (Kosovo amended).
 */
const SOUTHERN_EUROPE: CountryEntry[] = [
  { name: "Albania" },
  { name: "Andorra" },
  { name: "Bosnia and Herzegovina" },
  { name: "Croatia" },
  { name: "Gibraltar" },
  { name: "Greece" },
  { name: "Italy" },
  { name: "Kosovo" },
  { name: "Malta" },
  { name: "Montenegro" },
  { name: "North Macedonia", synonyms: COUNTRY_SYNONYMS["North Macedonia"] },
  { name: "Portugal" },
  { name: "San Marino" },
  { name: "Serbia" },
  { name: "Slovenia" },
  { name: "Spain" },
  { name: "Vatican City", synonyms: COUNTRY_SYNONYMS["Vatican City"] }
]

/**
 * List of countries and territories that are part of Western Europe.
 */
const WESTERN_EUROPE: CountryEntry[] = [
  { name: "Austria" },
  { name: "Belgium" },
  { name: "France" },
  { name: "Germany" },
  { name: "Liechtenstein" },
  { name: "Luxembourg" },
  { name: "Monaco" },
  { name: "Netherlands", synonyms: COUNTRY_SYNONYMS["Netherlands"] },
  { name: "Switzerland" }
]

/**
 * List of countries and territories that are part of Oceania.
 */
const OCEANIA: CountryEntry[] = [
  { name: "American Samoa" },
  { name: "Australia" },
  { name: "Christmas Island" },
  { name: "Cocos (Keeling) Islands" },
  { name: "Cook Islands" },
  { name: "Fiji" },
  { name: "French Polynesia" },
  { name: "Guam" },
  { name: "Heard Island and McDonald Islands" },
  { name: "Kiribati" },
  { name: "Marshall Islands" },
  { name: "Micronesia", synonyms: COUNTRY_SYNONYMS["Micronesia"] },
  { name: "Nauru" },
  { name: "New Caledonia" },
  { name: "New Zealand" },
  { name: "Niue" },
  { name: "Norfolk Island" },
  { name: "Northern Mariana Islands" },
  { name: "Palau" },
  { name: "Papua New Guinea" },
  { name: "Pitcairn Islands", synonyms: COUNTRY_SYNONYMS["Pitcairn Islands"] },
  { name: "Samoa" },
  { name: "Solomon Islands" },
  { name: "Tokelau" },
  { name: "Tonga" },
  { name: "Tuvalu" },
  { name: "United States Minor Outlying Islands" },
  { name: "Vanuatu" },
  { name: "Wallis and Futuna", synonyms: COUNTRY_SYNONYMS["Wallis and Futuna"] }
]

/**
 * List of countries and territories that are part of Australia and New Zealand.
 */
const AUSTRALIA_NEW_ZEALAND: CountryEntry[] = [
  { name: "Australia" },
  { name: "Christmas Island" },
  { name: "Cocos (Keeling) Islands" },
  { name: "Heard Island and McDonald Islands" },
  { name: "New Zealand" },
  { name: "Norfolk Island" }
]

/**
 * List of countries and territories that are part of Melanesia.
 */
const MELANESIA: CountryEntry[] = [
  { name: "Fiji" },
  { name: "New Caledonia" },
  { name: "Papua New Guinea" },
  { name: "Solomon Islands" },
  { name: "Vanuatu" }
]

/**
 * List of countries and territories that are part of Micronesia.
 */
const MICRONESIA: CountryEntry[] = [
  { name: "Guam" },
  { name: "Kiribati" },
  { name: "Marshall Islands" },
  { name: "Micronesia", synonyms: COUNTRY_SYNONYMS["Micronesia"] },
  { name: "Nauru" },
  { name: "Northern Mariana Islands" },
  { name: "Palau" },
  { name: "United States Minor Outlying Islands" }
]

/**
 * List of countries and territories that are part of Polynesia.
 */
const POLYNESIA: CountryEntry[] = [
  { name: "American Samoa" },
  { name: "Cook Islands" },
  { name: "French Polynesia" },
  { name: "Niue" },
  { name: "Pitcairn Islands", synonyms: COUNTRY_SYNONYMS["Pitcairn Islands"] },
  { name: "Samoa" },
  { name: "Tokelau" },
  { name: "Tonga" },
  { name: "Tuvalu" },
  { name: "Wallis and Futuna", synonyms: COUNTRY_SYNONYMS["Wallis and Futuna"] }
]

/**
 * List of countries that are part of the Association of Caribbean States.
 */
const ACS_COUNTRIES: CountryEntry[] = [
  { name: "Antigua and Barbuda" },
  { name: "Bahamas", synonyms: COUNTRY_SYNONYMS["Bahamas"] },
  { name: "Barbados" },
  { name: "Belize" },
  { name: "Colombia" },
  { name: "Costa Rica" },
  { name: "Cuba" },
  { name: "Dominica" },
  { name: "Dominican Republic" },
  { name: "El Salvador" },
  { name: "Grenada" },
  { name: "Guatemala" },
  { name: "Guyana" },
  { name: "Haiti" },
  { name: "Honduras" },
  { name: "Jamaica" },
  { name: "Mexico" },
  { name: "Nicaragua" },
  { name: "Panama" },
  { name: "Saint Kitts and Nevis" },
  { name: "Saint Lucia" },
  { name: "Saint Vincent and the Grenadines" },
  { name: "Suriname" },
  { name: "Trinidad and Tobago" },
  { name: "Venezuela", synonyms: COUNTRY_SYNONYMS["Venezuela"] }
]

/**
 * List of countries that are part of the African Free Trade Zone.
 */
const AFTZ_COUNTRIES: CountryEntry[] = [
  { name: "Angola" },
  { name: "Botswana" },
  { name: "Burundi" },
  { name: "Comoros" },
  { name: "Democratic Republic of the Congo", synonyms: COUNTRY_SYNONYMS["Democratic Republic of the Congo"] },
  { name: "Djibouti" },
  { name: "Egypt" },
  { name: "Eritrea" },
  { name: "Eswatini", synonyms: COUNTRY_SYNONYMS["Eswatini"] },
  { name: "Ethiopia" },
  { name: "Kenya" },
  { name: "Lesotho" },
  { name: "Libya" },
  { name: "Madagascar" },
  { name: "Malawi" },
  { name: "Mauritius" },
  { name: "Mozambique" },
  { name: "Namibia" },
  { name: "Rwanda" },
  { name: "Seychelles" },
  { name: "South Africa" },
  { name: "Sudan" },
  { name: "Tanzania", synonyms: COUNTRY_SYNONYMS["Tanzania"] },
  { name: "Uganda" },
  { name: "Zambia" },
  { name: "Zimbabwe" }
]

/**
 * List of countries that are part of the Latin American Integration Association.
 */
const ALADI_COUNTRIES: CountryEntry[] = [
  { name: "Argentina" },
  { name: "Bolivia", synonyms: COUNTRY_SYNONYMS["Bolivia"] },
  { name: "Brazil" },
  { name: "Chile" },
  { name: "Colombia" },
  { name: "Cuba" },
  { name: "Ecuador" },
  { name: "Mexico" },
  { name: "Panama" },
  { name: "Paraguay" },
  { name: "Peru" },
  { name: "Uruguay" },
  { name: "Venezuela", synonyms: COUNTRY_SYNONYMS["Venezuela"] }
]

/**
 * List of countries that are part of the Asia-Pacific Economic Cooperation.
 */
const APEC_COUNTRIES: CountryEntry[] = [
  { name: "Australia" },
  { name: "Brunei", synonyms: COUNTRY_SYNONYMS["Brunei"] },
  { name: "Canada" },
  { name: "Chile" },
  { name: "China", synonyms: COUNTRY_SYNONYMS["China"] },
  { name: "Hong Kong", synonyms: COUNTRY_SYNONYMS["Hong Kong"] },
  { name: "Indonesia" },
  { name: "Japan" },
  { name: "Malaysia" },
  { name: "Mexico" },
  { name: "New Zealand" },
  { name: "Papua New Guinea" },
  { name: "Peru" },
  { name: "Philippines" },
  { name: "Russia", synonyms: COUNTRY_SYNONYMS["Russia"] },
  { name: "Singapore" },
  { name: "South Korea", synonyms: COUNTRY_SYNONYMS["South Korea"] },
  { name: "Taiwan", synonyms: COUNTRY_SYNONYMS["Taiwan"] },
  { name: "Thailand" },
  { name: "United States", synonyms: COUNTRY_SYNONYMS["United States"] },
  { name: "Vietnam", synonyms: COUNTRY_SYNONYMS["Vietnam"] }
]

/**
 * List of countries that are part of the Asia-Pacific Trade Agreement.
 */
const APTA_COUNTRIES: CountryEntry[] = [
  { name: "Bangladesh" },
  { name: "China", synonyms: COUNTRY_SYNONYMS["China"] },
  { name: "India" },
  { name: "Laos", synonyms: COUNTRY_SYNONYMS["Laos"] },
  { name: "Mongolia" },
  { name: "South Korea", synonyms: COUNTRY_SYNONYMS["South Korea"] },
  { name: "Sri Lanka" }
]

/**
 * List of countries that are part of the League of Arab States.
 */
const ARAB_LEAGUE_COUNTRIES: CountryEntry[] = [
  { name: "Algeria" },
  { name: "Bahrain" },
  { name: "Comoros" },
  { name: "Djibouti" },
  { name: "Egypt" },
  { name: "Iraq" },
  { name: "Jordan" },
  { name: "Kuwait" },
  { name: "Lebanon" },
  { name: "Libya" },
  { name: "Mauritania" },
  { name: "Morocco" },
  { name: "Oman" },
  { name: "Palestine", synonyms: COUNTRY_SYNONYMS["Palestine"] },
  { name: "Qatar" },
  { name: "Saudi Arabia" },
  { name: "Somalia" },
  { name: "Sudan" },
  { name: "Syria", synonyms: COUNTRY_SYNONYMS["Syria"] },
  { name: "Tunisia" },
  { name: "United Arab Emirates", synonyms: COUNTRY_SYNONYMS["United Arab Emirates"] },
  { name: "Yemen" }
]

/**
 * List of countries that are part of the Arctic Council.
 */
const ARCTIC_COUNCIL_COUNTRIES: CountryEntry[] = [
  { name: "Canada" },
  { name: "Denmark" },
  { name: "Finland" },
  { name: "Iceland" },
  { name: "Norway" },
  { name: "Russia", synonyms: COUNTRY_SYNONYMS["Russia"] },
  { name: "Sweden" },
  { name: "United States", synonyms: COUNTRY_SYNONYMS["United States"] }
]

/**
 * List of countries that are part of the Association of Southeast Asian Nations.
 */
const ASEAN_COUNTRIES: CountryEntry[] = [
  { name: "Brunei", synonyms: COUNTRY_SYNONYMS["Brunei"] },
  { name: "Cambodia" },
  { name: "Indonesia" },
  { name: "Laos", synonyms: COUNTRY_SYNONYMS["Laos"] },
  { name: "Malaysia" },
  { name: "Myanmar" },
  { name: "Philippines" },
  { name: "Singapore" },
  { name: "Thailand" },
  { name: "Timor-Leste" },
  { name: "Vietnam", synonyms: COUNTRY_SYNONYMS["Vietnam"] }
]

/**
 * List of countries that are part of the Association of Southeast Asian Nations Free Trade Area.
 */
const AFTA_COUNTRIES: CountryEntry[] = [
  ...ASEAN_COUNTRIES
]

/**
 * List of countries that are part of the African Union.
 */
const AU_COUNTRIES: CountryEntry[] = [
  { name: "Algeria" },
  { name: "Angola" },
  { name: "Benin" },
  { name: "Botswana" },
  { name: "Burkina Faso" },
  { name: "Burundi" },
  { name: "Cameroon" },
  { name: "Cape Verde", synonyms: COUNTRY_SYNONYMS["Cape Verde"] },
  { name: "Central African Republic" },
  { name: "Chad" },
  { name: "Comoros" },
  { name: "Democratic Republic of the Congo", synonyms: COUNTRY_SYNONYMS["Democratic Republic of the Congo"] },
  { name: "Djibouti" },
  { name: "Egypt" },
  { name: "Equatorial Guinea" },
  { name: "Eritrea" },
  { name: "Eswatini", synonyms: COUNTRY_SYNONYMS["Eswatini"] },
  { name: "Ethiopia" },
  { name: "Gabon" },
  { name: "Gambia", synonyms: COUNTRY_SYNONYMS["Gambia"] },
  { name: "Ghana" },
  { name: "Guinea-Bissau" },
  { name: "Guinea" },
  { name: "Ivory Coast", synonyms: COUNTRY_SYNONYMS["Ivory Coast"] },
  { name: "Kenya" },
  { name: "Lesotho" },
  { name: "Liberia" },
  { name: "Libya" },
  { name: "Madagascar" },
  { name: "Malawi" },
  { name: "Mali" },
  { name: "Mauritania" },
  { name: "Mauritius" },
  { name: "Morocco" },
  { name: "Mozambique" },
  { name: "Namibia" },
  { name: "Niger" },
  { name: "Nigeria" },
  { name: "Republic of the Congo", synonyms: COUNTRY_SYNONYMS["Republic of the Congo"] },
  { name: "Rwanda" },
  { name: "Sao Tome and Principe" },
  { name: "Senegal" },
  { name: "Seychelles" },
  { name: "Sierra Leone" },
  { name: "Somalia" },
  { name: "South Africa" },
  { name: "South Sudan" },
  { name: "Sudan" },
  { name: "Tanzania", synonyms: COUNTRY_SYNONYMS["Tanzania"] },
  { name: "Togo" },
  { name: "Tunisia" },
  { name: "Uganda" },
  { name: "Western Sahara", synonyms: COUNTRY_SYNONYMS["Western Sahara"] },
  { name: "Zambia" },
  { name: "Zimbabwe" }
]

/**
 * List of countries that are suspended from the African Union.
 */
const AU_SUSPENDED_COUNTRIES: CountryEntry[] = [
  { name: "Burkina Faso" },
  { name: "Guinea" },
  { name: "Madagascar" },
  { name: "Mali" },
  { name: "Niger" },
  { name: "Sudan" }
]

/**
 * List of countries that have ratified with the depository of the African Continental Free Trade Area.
 */
const AFCFTA_COUNTRIES: CountryEntry[] = [
  ...AU_COUNTRIES.filter((country) => country.name !== "Benin" && country.name !== "Eritrea" && country.name !== "Libya" && country.name !== "Madagascar" && country.name !== "Somalia" && country.name !== "South Sudan" && country.name !== "Sudan")
]

/**
 * List of countries that are part of the Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation.
 */
const BIMSTEC_COUNTRIES: CountryEntry[] = [
  { name: "Bangladesh" },
  { name: "Bhutan" },
  { name: "India" },
  { name: "Myanmar" },
  { name: "Nepal" },
  { name: "Sri Lanka" },
  { name: "Thailand" }
]

/**
 * List of countries that are part of BRIC.
 */
const BRIC_COUNTRIES: CountryEntry[] = [
  { name: "Brazil" },
  { name: "China", synonyms: COUNTRY_SYNONYMS["China"] },
  { name: "India" },
  { name: "Russia", synonyms: COUNTRY_SYNONYMS["Russia"] }
]

/**
 * List of countries that are part of BRICS.
 */
const BRICS_COUNTRIES: CountryEntry[] = [
  ...BRIC_COUNTRIES,
  { name: "South Africa" }
]

/**
 * List of countries that are part of BRICS Plus.
 */
const BRICS_PLUS_COUNTRIES: CountryEntry[] = [
  ...BRICS_COUNTRIES,
  { name: "Egypt" },
  { name: "Ethiopia" },
  { name: "Indonesia" },
  { name: "Iran", synonyms: COUNTRY_SYNONYMS["Iran"] },
  { name: "United Arab Emirates", synonyms: COUNTRY_SYNONYMS["United Arab Emirates"] }
]

/**
 * List of countries that are part of the Organization of the Black Sea Economic Cooperation.
 */
const BSEC_COUNTRIES: CountryEntry[] = [
  { name: "Albania" },
  { name: "Armenia" },
  { name: "Azerbaijan" },
  { name: "Bulgaria" },
  { name: "Georgia" },
  { name: "Greece" },
  { name: "Moldova", synonyms: COUNTRY_SYNONYMS["Moldova"] },
  { name: "North Macedonia", synonyms: COUNTRY_SYNONYMS["North Macedonia"] },
  { name: "Romania" },
  { name: "Russia", synonyms: COUNTRY_SYNONYMS["Russia"] },
  { name: "Serbia" },
  { name: "Turkey", synonyms: COUNTRY_SYNONYMS["Turkey"] },
  { name: "Ukraine" }
]

/**
 * List of countries that are part of the Dominican Republic–Central America Free Trade Agreement.
 */
const CAFTADR_COUNTRIES: CountryEntry[] = [
  { name: "Costa Rica" },
  { name: "Dominican Republic" },
  { name: "El Salvador" },
  { name: "Guatemala" },
  { name: "Honduras" },
  { name: "Nicaragua" },
  { name: "United States", synonyms: COUNTRY_SYNONYMS["United States"] }
]

/**
 * List of countries that are part of the Andean Community.
 */
const CAN_COUNTRIES: CountryEntry[] = [
  { name: "Bolivia", synonyms: COUNTRY_SYNONYMS["Bolivia"] },
  { name: "Colombia" },
  { name: "Ecuador" },
  { name: "Peru" }
]

/**
 * List of countries that are part of the Caribbean Community.
 */
const CARICOM_COUNTRIES: CountryEntry[] = [
  { name: "Antigua and Barbuda" },
  { name: "Bahamas", synonyms: COUNTRY_SYNONYMS["Bahamas"] },
  { name: "Barbados" },
  { name: "Belize" },
  { name: "Dominica" },
  { name: "Grenada" },
  { name: "Guyana" },
  { name: "Haiti" },
  { name: "Jamaica" },
  { name: "Montserrat" },
  { name: "Saint Kitts and Nevis" },
  { name: "Saint Lucia" },
  { name: "Saint Vincent and the Grenadines" },
  { name: "Suriname" },
  { name: "Trinidad and Tobago" }
]

/**
 * List of countries that are part of the Central European Free Trade Agreement.
 */
const CEFTA_COUNTRIES: CountryEntry[] = [
  { name: "Albania" },
  { name: "Bosnia and Herzegovina" },
  { name: "Kosovo" },
  { name: "Moldova", synonyms: COUNTRY_SYNONYMS["Moldova"] },
  { name: "Montenegro" },
  { name: "North Macedonia", synonyms: COUNTRY_SYNONYMS["North Macedonia"] },
  { name: "Serbia" }
]

/**
 * List of countries that are part of the Economic and Monetary Community of Central Africa.
 */
const CEMAC_COUNTRIES: CountryEntry[] = [
  { name: "Cameroon" },
  { name: "Central African Republic" },
  { name: "Chad" },
  { name: "Equatorial Guinea" },
  { name: "Gabon" },
  { name: "Republic of the Congo", synonyms: COUNTRY_SYNONYMS["Republic of the Congo"] }
]

/**
 * List of countries that are part of the Commonwealth of Independent States.
 */
const CIS_COUNTRIES: CountryEntry[] = [
  { name: "Armenia" },
  { name: "Azerbaijan" },
  { name: "Belarus" },
  { name: "Kazakhstan" },
  { name: "Kyrgyzstan" },
  { name: "Moldova", synonyms: COUNTRY_SYNONYMS["Moldova"] },
  { name: "Russia", synonyms: COUNTRY_SYNONYMS["Russia"] },
  { name: "Tajikistan" },
  { name: "Uzbekistan" }
]

/**
 * List of countries that are part of the Commonwealth of Nations.
 */
const CON_COUNTRIES: CountryEntry[] = [
  { name: "Antigua and Barbuda" },
  { name: "Australia" },
  { name: "Bahamas", synonyms: COUNTRY_SYNONYMS["Bahamas"] },
  { name: "Bangladesh" },
  { name: "Barbados" },
  { name: "Belize" },
  { name: "Botswana" },
  { name: "Brunei", synonyms: COUNTRY_SYNONYMS["Brunei"] },
  { name: "Cameroon" },
  { name: "Canada" },
  { name: "Cyprus" },
  { name: "Dominica" },
  { name: "Eswatini", synonyms: COUNTRY_SYNONYMS["Eswatini"] },
  { name: "Fiji" },
  { name: "Gabon" },
  { name: "Gambia", synonyms: COUNTRY_SYNONYMS["Gambia"] },
  { name: "Ghana" },
  { name: "Grenada" },
  { name: "Guyana" },
  { name: "India" },
  { name: "Jamaica" },
  { name: "Kenya" },
  { name: "Kiribati" },
  { name: "Lesotho" },
  { name: "Malawi" },
  { name: "Malaysia" },
  { name: "Maldives" },
  { name: "Malta" },
  { name: "Mauritius" },
  { name: "Mozambique" },
  { name: "Namibia" },
  { name: "Nauru" },
  { name: "New Zealand" },
  { name: "Nigeria" },
  { name: "Pakistan" },
  { name: "Papua New Guinea" },
  { name: "Rwanda" },
  { name: "Saint Kitts and Nevis" },
  { name: "Saint Lucia" },
  { name: "Saint Vincent and the Grenadines" },
  { name: "Samoa" },
  { name: "Seychelles" },
  { name: "Sierra Leone" },
  { name: "Singapore" },
  { name: "Solomon Islands" },
  { name: "South Africa" },
  { name: "Sri Lanka" },
  { name: "Tanzania", synonyms: COUNTRY_SYNONYMS["Tanzania"] },
  { name: "Togo" },
  { name: "Tonga" },
  { name: "Trinidad and Tobago" },
  { name: "Tuvalu" },
  { name: "Uganda" },
  { name: "United Kingdom", synonyms: COUNTRY_SYNONYMS["United Kingdom"] },
  { name: "Vanuatu" },
  { name: "Zambia" }
]

/**
 * List of countries that are part of the Comprehensive and Progressive Agreement for Trans-Pacific Partnership.
 */
const CPTPP_COUNTRIES: CountryEntry[] = [
  { name: "Australia" },
  { name: "Brunei", synonyms: COUNTRY_SYNONYMS["Brunei"] },
  { name: "Canada" },
  { name: "Chile" },
  { name: "Japan" },
  { name: "Malaysia" },
  { name: "Mexico" },
  { name: "New Zealand" },
  { name: "Peru" },
  { name: "Singapore" },
  { name: "United Kingdom", synonyms: COUNTRY_SYNONYMS["United Kingdom"] },
  { name: "Vietnam", synonyms: COUNTRY_SYNONYMS["Vietnam"] }
]

/**
 * List of countries that are part of the East African Community.
 */
const EAC_COUNTRIES: CountryEntry[] = [
  { name: "Burundi" },
  { name: "Democratic Republic of the Congo", synonyms: COUNTRY_SYNONYMS["Democratic Republic of the Congo"] },
  { name: "Kenya" },
  { name: "Rwanda" },
  { name: "Somalia" },
  { name: "South Sudan" },
  { name: "Tanzania", synonyms: COUNTRY_SYNONYMS["Tanzania"] },
  { name: "Uganda" }
]

/**
 * List of countries that are part of the East Asia Summit.
 */
const EAS_COUNTRIES: CountryEntry[] = [
  { name: "Australia" },
  { name: "Brunei", synonyms: COUNTRY_SYNONYMS["Brunei"] },
  { name: "Cambodia" },
  { name: "China", synonyms: COUNTRY_SYNONYMS["China"] },
  { name: "India" },
  { name: "Indonesia" },
  { name: "Japan" },
  { name: "Laos", synonyms: COUNTRY_SYNONYMS["Laos"] },
  { name: "Malaysia" },
  { name: "Myanmar" },
  { name: "New Zealand" },
  { name: "Philippines" },
  { name: "Russia", synonyms: COUNTRY_SYNONYMS["Russia"] },
  { name: "Singapore" },
  { name: "South Korea", synonyms: COUNTRY_SYNONYMS["South Korea"] },
  { name: "Thailand" },
  { name: "United States", synonyms: COUNTRY_SYNONYMS["United States"] },
  { name: "Vietnam", synonyms: COUNTRY_SYNONYMS["Vietnam"] }
]

/**
 * List of countries that are part of the Economic Community of Central African States.
 */
const ECCAS_COUNTRIES: CountryEntry[] = [
  { name: "Angola" },
  { name: "Burundi" },
  { name: "Cameroon" },
  { name: "Central African Republic" },
  { name: "Chad" },
  { name: "Democratic Republic of the Congo", synonyms: COUNTRY_SYNONYMS["Democratic Republic of the Congo"] },
  { name: "Equatorial Guinea" },
  { name: "Gabon" },
  { name: "Republic of the Congo", synonyms: COUNTRY_SYNONYMS["Republic of the Congo"] },
  { name: "Sao Tome and Principe" }
]

/**
 * List of countries that are part of the Economic Community of West African States.
 */
const ECOWAS_COUNTRIES: CountryEntry[] = [
  { name: "Benin" },
  { name: "Cape Verde", synonyms: COUNTRY_SYNONYMS["Cape Verde"] },
  { name: "Gambia", synonyms: COUNTRY_SYNONYMS["Gambia"] },
  { name: "Ghana" },
  { name: "Guinea-Bissau" },
  { name: "Guinea" },
  { name: "Ivory Coast", synonyms: COUNTRY_SYNONYMS["Ivory Coast"] },
  { name: "Liberia" },
  { name: "Nigeria" },
  { name: "Senegal" },
  { name: "Sierra Leone" },
  { name: "Togo" }
]

/**
 * List of countries that are suspended from the Economic Community of West African States.
 */
const ECOWAS_SUSPENDED_COUNTRIES: CountryEntry[] = [
  { name: "Guinea" }
]

/**
 * List of countries that are part of the European Free Trade Association.
 */
const EFTA_COUNTRIES: CountryEntry[] = [
  { name: "Iceland" },
  { name: "Liechtenstein" },
  { name: "Norway" },
  { name: "Switzerland" }
]

/**
 * List of countries that are part of the European Union.
 */
const EU_COUNTRIES: CountryEntry[] = [
  { name: "Austria" },
  { name: "Belgium" },
  { name: "Bulgaria" },
  { name: "Croatia" },
  { name: "Cyprus" },
  { name: "Czechia", synonyms: COUNTRY_SYNONYMS["Czechia"] },
  { name: "Denmark" },
  { name: "Estonia" },
  { name: "Finland" },
  { name: "France" },
  { name: "Germany" },
  { name: "Greece" },
  { name: "Hungary" },
  { name: "Ireland" },
  { name: "Italy" },
  { name: "Latvia" },
  { name: "Lithuania" },
  { name: "Luxembourg" },
  { name: "Malta" },
  { name: "Netherlands", synonyms: COUNTRY_SYNONYMS["Netherlands"] },
  { name: "Poland" },
  { name: "Portugal" },
  { name: "Romania" },
  { name: "Slovakia" },
  { name: "Slovenia" },
  { name: "Spain" },
  { name: "Sweden" }
]

/**
 * List of countries that are part of the European Economic Area.
 */
const EEA_COUNTRIES: CountryEntry[] = [
  ...EU_COUNTRIES,
  { name: "Iceland" },
  { name: "Liechtenstein" },
  { name: "Norway" }
]

/**
 * List of countries that are part of the European Union Customs Union.
 */
const EUCU_COUNTRIES: CountryEntry[] = [
  ...EU_COUNTRIES,
  { name: "Andorra" },
  { name: "Monaco" },
  { name: "San Marino" },
  { name: "Turkey", synonyms: COUNTRY_SYNONYMS["Turkey"] }
]

/**
 * List of countries that are part of the Eurozone.
 */
const EUROZONE_COUNTRIES: CountryEntry[] = [
  ...EU_COUNTRIES.filter((country) => country.name !== "Bulgaria" && country.name !== "Czechia" && country.name !== "Denmark" && country.name !== "Hungary" && country.name !== "Poland" && country.name !== "Romania" && country.name !== "Sweden")
]

/**
 * List of countries that use the Euro.
 */
const EURO_COUNTRIES: CountryEntry[] = [
  ...EUROZONE_COUNTRIES,
  { name: "Andorra" },
  { name: "Kosovo" },
  { name: "Monaco" },
  { name: "Montenegro" },
  { name: "San Marino" },
  { name: "Vatican City", synonyms: COUNTRY_SYNONYMS["Vatican City"] }
]

/**
 * List of countries and organizations that are part of the Group of Seven.
 */
const G7_COUNTRIES: CountryEntry[] = [
  ...EU_COUNTRIES,
  { name: "Canada" },
  { name: "France" },
  { name: "Germany" },
  { name: "Italy" },
  { name: "Japan" },
  { name: "United Kingdom", synonyms: COUNTRY_SYNONYMS["United Kingdom"] },
  { name: "United States", synonyms: COUNTRY_SYNONYMS["United States"] }
]

/**
 * List of countries and organizations that are part of the Group of Twenty.
 */
const G20_COUNTRIES: CountryEntry[] = [
  ...AU_COUNTRIES,
  ...G7_COUNTRIES,
  { name: "Argentina" },
  { name: "Australia" },
  { name: "Brazil" },
  { name: "China", synonyms: COUNTRY_SYNONYMS["China"] },
  { name: "India" },
  { name: "Indonesia" },
  { name: "Mexico" },
  { name: "Russia", synonyms: COUNTRY_SYNONYMS["Russia"] },
  { name: "Saudi Arabia" },
  { name: "South Africa" },
  { name: "South Korea", synonyms: COUNTRY_SYNONYMS["South Korea"] },
  { name: "Turkey", synonyms: COUNTRY_SYNONYMS["Turkey"] }
]

/**
 * List of countries that are part of the Group of Twenty-Four.
 */
const G24_COUNTRIES: CountryEntry[] = [
  { name: "Algeria" },
  { name: "Argentina" },
  { name: "Brazil" },
  { name: "China", synonyms: COUNTRY_SYNONYMS["China"] },
  { name: "Colombia" },
  { name: "Democratic Republic of the Congo", synonyms: COUNTRY_SYNONYMS["Democratic Republic of the Congo"] },
  { name: "Ecuador" },
  { name: "Egypt" },
  { name: "Ethiopia" },
  { name: "Gabon" },
  { name: "Ghana" },
  { name: "Guatemala" },
  { name: "Haiti" },
  { name: "India" },
  { name: "Iran", synonyms: COUNTRY_SYNONYMS["Iran"] },
  { name: "Ivory Coast", synonyms: COUNTRY_SYNONYMS["Ivory Coast"] },
  { name: "Kenya" },
  { name: "Lebanon" },
  { name: "Mexico" },
  { name: "Morocco" },
  { name: "Nigeria" },
  { name: "Pakistan" },
  { name: "Peru" },
  { name: "Philippines" },
  { name: "South Africa" },
  { name: "Sri Lanka" },
  { name: "Syria", synonyms: COUNTRY_SYNONYMS["Syria"] },
  { name: "Trinidad and Tobago" },
  { name: "Venezuela", synonyms: COUNTRY_SYNONYMS["Venezuela"] }
]

/**
 * List of countries that are part of the Greater Arab Free Trade Area.
 */
const GAFTA_COUNTRIES: CountryEntry[] = [
  ...ARAB_LEAGUE_COUNTRIES.filter((country) => country.name !== "Comoros" && country.name !== "Djibouti" && country.name !== "Mauritania" && country.name !== "Somalia")
]

/**
 * List of countries that are part of the Gulf Cooperation Council.
 */
const GCC_COUNTRIES: CountryEntry[] = [
  { name: "Bahrain" },
  { name: "Kuwait" },
  { name: "Oman" },
  { name: "Qatar" },
  { name: "Saudi Arabia" },
  { name: "United Arab Emirates", synonyms: COUNTRY_SYNONYMS["United Arab Emirates"] }
]

/**
 * List of countries that are part of the Indian Ocean Rim Association.
 */
const IORA_COUNTRIES: CountryEntry[] = [
  { name: "Australia" },
  { name: "Bangladesh" },
  { name: "Comoros" },
  { name: "France" },
  { name: "India" },
  { name: "Indonesia" },
  { name: "Iran", synonyms: COUNTRY_SYNONYMS["Iran"] },
  { name: "Kenya" },
  { name: "Madagascar" },
  { name: "Malaysia" },
  { name: "Maldives" },
  { name: "Mauritius" },
  { name: "Mozambique" },
  { name: "Oman" },
  { name: "Seychelles" },
  { name: "Singapore" },
  { name: "Somalia" },
  { name: "South Africa" },
  { name: "Sri Lanka" },
  { name: "Tanzania", synonyms: COUNTRY_SYNONYMS["Tanzania"] },
  { name: "Thailand" },
  { name: "United Arab Emirates", synonyms: COUNTRY_SYNONYMS["United Arab Emirates"] },
  { name: "Yemen" }
]

/**
 * List of countries that are part of the Southern Common Market.
 */
const MERCOSUR_COUNTRIES: CountryEntry[] = [
  { name: "Argentina" },
  { name: "Bolivia", synonyms: COUNTRY_SYNONYMS["Bolivia"] },
  { name: "Brazil" },
  { name: "Paraguay" },
  { name: "Uruguay" },
  { name: "Venezuela", synonyms: COUNTRY_SYNONYMS["Venezuela"] }
]

/**
 * List of countries that are suspended from the Southern Common Market.
 */
const MERCOSUR_SUSPENDED_COUNTRIES: CountryEntry[] = [
  { name: "Venezuela", synonyms: COUNTRY_SYNONYMS["Venezuela"] }
]

/**
 * List of countries and territories that are part of the Nordics.
 */
const NORDIC_COUNTRIES: CountryEntry[] = [
  { name: "Aland Islands", synonyms: COUNTRY_SYNONYMS["Aland Islands"] },
  { name: "Bouvet Island" },
  { name: "Denmark" },
  { name: "Faroe Islands" },
  { name: "Finland" },
  { name: "Greenland" },
  { name: "Iceland" },
  { name: "Norway" },
  { name: "Svalbard and Jan Mayen", synonyms: COUNTRY_SYNONYMS["Svalbard and Jan Mayen"] },
  { name: "Sweden" },
]

/**
 * List of countries that are part of the Nordic Council.
 */
const NC_COUNTRIES: CountryEntry[] = [
...NORDIC_COUNTRIES.filter((country) => country.name !== "Bouvet Island" && country.name !== "Svalbard and Jan Mayen")
]

/**
 * List of countries that are part of the Nordic Passport Union.
 */
const NPU_COUNTRIES: CountryEntry[] = [
...NORDIC_COUNTRIES.filter((country) => country.name !== "Bouvet Island" && country.name !== "Greenland" && country.name !== "Svalbard and Jan Mayen")
]

/**
 * List of countries that are part of the Organization of American States.
 */
const OAS_COUNTRIES: CountryEntry[] = [
  { name: "Antigua and Barbuda" },
  { name: "Argentina" },
  { name: "Bahamas", synonyms: COUNTRY_SYNONYMS["Bahamas"] },
  { name: "Barbados" },
  { name: "Belize" },
  { name: "Bolivia", synonyms: COUNTRY_SYNONYMS["Bolivia"] },
  { name: "Brazil" },
  { name: "Canada" },
  { name: "Chile" },
  { name: "Colombia" },
  { name: "Costa Rica" },
  { name: "Dominica" },
  { name: "Dominican Republic" },
  { name: "Ecuador" },
  { name: "El Salvador" },
  { name: "Grenada" },
  { name: "Guatemala" },
  { name: "Guyana" },
  { name: "Haiti" },
  { name: "Honduras" },
  { name: "Jamaica" },
  { name: "Mexico" },
  { name: "Panama" },
  { name: "Paraguay" },
  { name: "Peru" },
  { name: "Saint Kitts and Nevis" },
  { name: "Saint Lucia" },
  { name: "Saint Vincent and the Grenadines" },
  { name: "Suriname" },
  { name: "Trinidad and Tobago" },
  { name: "United States", synonyms: COUNTRY_SYNONYMS["United States"] },
  { name: "Uruguay" },
  { name: "Venezuela", synonyms: COUNTRY_SYNONYMS["Venezuela"] }
]

/**
 * List of countries that are part of the Organisation for Economic Co-operation and Development.
 */
const OECD_COUNTRIES: CountryEntry[] = [
  { name: "Australia" },
  { name: "Austria" },
  { name: "Belgium" },
  { name: "Canada" },
  { name: "Chile" },
  { name: "Colombia" },
  { name: "Costa Rica" },
  { name: "Czechia", synonyms: COUNTRY_SYNONYMS["Czechia"] },
  { name: "Denmark" },
  { name: "Estonia" },
  { name: "Finland" },
  { name: "France" },
  { name: "Germany" },
  { name: "Greece" },
  { name: "Hungary" },
  { name: "Iceland" },
  { name: "Ireland" },
  { name: "Israel" },
  { name: "Italy" },
  { name: "Japan" },
  { name: "Latvia" },
  { name: "Lithuania" },
  { name: "Luxembourg" },
  { name: "Mexico" },
  { name: "Netherlands", synonyms: COUNTRY_SYNONYMS["Netherlands"] },
  { name: "New Zealand" },
  { name: "Norway" },
  { name: "Poland" },
  { name: "Portugal" },
  { name: "Slovakia" },
  { name: "Slovenia" },
  { name: "South Korea", synonyms: COUNTRY_SYNONYMS["South Korea"] },
  { name: "Spain" },
  { name: "Sweden" },
  { name: "Switzerland" },
  { name: "Turkey", synonyms: COUNTRY_SYNONYMS["Turkey"] },
  { name: "United Kingdom", synonyms: COUNTRY_SYNONYMS["United Kingdom"] },
  { name: "United States", synonyms: COUNTRY_SYNONYMS["United States"] }
]

/**
 * List of countries that are part of the Organisation of Islamic Cooperation.
 */
const OIC_COUNTRIES: CountryEntry[] = [
  { name: "Afghanistan" },
  { name: "Albania" },
  { name: "Algeria" },
  { name: "Azerbaijan" },
  { name: "Bahrain" },
  { name: "Bangladesh" },
  { name: "Benin" },
  { name: "Brunei", synonyms: COUNTRY_SYNONYMS["Brunei"] },
  { name: "Burkina Faso" },
  { name: "Cameroon" },
  { name: "Chad" },
  { name: "Comoros" },
  { name: "Djibouti" },
  { name: "Egypt" },
  { name: "Gabon" },
  { name: "Gambia", synonyms: COUNTRY_SYNONYMS["Gambia"] },
  { name: "Guinea-Bissau" },
  { name: "Guinea" },
  { name: "Guyana" },
  { name: "Indonesia" },
  { name: "Iran", synonyms: COUNTRY_SYNONYMS["Iran"] },
  { name: "Iraq" },
  { name: "Ivory Coast", synonyms: COUNTRY_SYNONYMS["Ivory Coast"] },
  { name: "Jordan" },
  { name: "Kazakhstan" },
  { name: "Kuwait" },
  { name: "Kyrgyzstan" },
  { name: "Lebanon" },
  { name: "Libya" },
  { name: "Malaysia" },
  { name: "Maldives" },
  { name: "Mali" },
  { name: "Mauritania" },
  { name: "Morocco" },
  { name: "Mozambique" },
  { name: "Niger" },
  { name: "Nigeria" },
  { name: "Oman" },
  { name: "Pakistan" },
  { name: "Palestine", synonyms: COUNTRY_SYNONYMS["Palestine"] },
  { name: "Qatar" },
  { name: "Saudi Arabia" },
  { name: "Senegal" },
  { name: "Sierra Leone" },
  { name: "Somalia" },
  { name: "Sudan" },
  { name: "Suriname" },
  { name: "Syria", synonyms: COUNTRY_SYNONYMS["Syria"] },
  { name: "Tajikistan" },
  { name: "Togo" },
  { name: "Tunisia" },
  { name: "Turkey", synonyms: COUNTRY_SYNONYMS["Turkey"] },
  { name: "Turkmenistan" },
  { name: "Uganda" },
  { name: "United Arab Emirates", synonyms: COUNTRY_SYNONYMS["United Arab Emirates"] },
  { name: "Uzbekistan" },
  { name: "Yemen" }
]

/**
 * List of countries that are part of the Pacific Alliance.
 */
const PA_COUNTRIES: CountryEntry[] = [
  { name: "Chile" },
  { name: "Colombia" },
  { name: "Mexico" },
  { name: "Peru" }
]

/**
 * List of countries that are part of the Pacific Alliance Free Trade Area.
 */
const PAFTA_COUNTRIES: CountryEntry[] = [
  ...PA_COUNTRIES
]

/**
 * List of countries that are part of the Pacific Community.
 */
const PC_COUNTRIES: CountryEntry[] = [
  { name: "American Samoa" },
  { name: "Australia" },
  { name: "Cook Islands" },
  { name: "Fiji" },
  { name: "France" },
  { name: "French Polynesia" },
  { name: "Guam" },
  { name: "Kiribati" },
  { name: "Marshall Islands" },
  { name: "Micronesia", synonyms: COUNTRY_SYNONYMS["Micronesia"] },
  { name: "Nauru" },
  { name: "New Caledonia" },
  { name: "New Zealand" },
  { name: "Niue" },
  { name: "Northern Mariana Islands" },
  { name: "Palau" },
  { name: "Papua New Guinea" },
  { name: "Pitcairn Islands", synonyms: COUNTRY_SYNONYMS["Pitcairn Islands"] },
  { name: "Samoa" },
  { name: "Solomon Islands" },
  { name: "Tokelau" },
  { name: "Tonga" },
  { name: "Tuvalu" },
  { name: "United Kingdom", synonyms: COUNTRY_SYNONYMS["United Kingdom"] },
  { name: "United States", synonyms: COUNTRY_SYNONYMS["United States"] },
  { name: "Vanuatu" },
  { name: "Wallis and Futuna", synonyms: COUNTRY_SYNONYMS["Wallis and Futuna"] }
]

/**
 * List of countries that are part of the Pacific Islands Forum.
 */
const PIF_COUNTRIES: CountryEntry[] = [
  { name: "Australia" },
  { name: "Cook Islands" },
  { name: "Fiji" },
  { name: "French Polynesia" },
  { name: "Kiribati" },
  { name: "Marshall Islands" },
  { name: "Micronesia", synonyms: COUNTRY_SYNONYMS["Micronesia"] },
  { name: "Nauru" },
  { name: "New Caledonia" },
  { name: "New Zealand" },
  { name: "Niue" },
  { name: "Palau" },
  { name: "Papua New Guinea" },
  { name: "Samoa" },
  { name: "Solomon Islands" },
  { name: "Tonga" },
  { name: "Tuvalu" },
  { name: "Vanuatu" }
]

/**
 * List of countries that are part of the Regional Comprehensive Economic Partnership.
 */
const RCEP_COUNTRIES: CountryEntry[] = [
  ...ASEAN_COUNTRIES.filter((country) => country.name !== "Myanmar"),
  { name: "Australia" },
  { name: "China", synonyms: COUNTRY_SYNONYMS["China"] },
  { name: "Japan" },
  { name: "New Zealand" },
  { name: "South Korea", synonyms: COUNTRY_SYNONYMS["South Korea"] }
]

/**
 * List of countries that are part of the South Asian Association for Regional Cooperation.
 */
const SAARC_COUNTRIES: CountryEntry[] = [
  { name: "Afghanistan" },
  { name: "Bangladesh" },
  { name: "Bhutan" },
  { name: "India" },
  { name: "Maldives" },
  { name: "Nepal" },
  { name: "Pakistan" },
  { name: "Sri Lanka" }
]

/**
 * List of countries that are part of the Southern African Customs Union.
 */
const SACU_COUNTRIES: CountryEntry[] = [
  { name: "Botswana" },
  { name: "Eswatini", synonyms: COUNTRY_SYNONYMS["Eswatini"] },
  { name: "Lesotho" },
  { name: "Namibia" },
  { name: "South Africa" }
]

/**
 * List of countries that are part of the Southern African Development Community.
 */
const SADC_COUNTRIES: CountryEntry[] = [
  { name: "Angola" },
  { name: "Botswana" },
  { name: "Comoros" },
  { name: "Democratic Republic of the Congo", synonyms: COUNTRY_SYNONYMS["Democratic Republic of the Congo"] },
  { name: "Eswatini", synonyms: COUNTRY_SYNONYMS["Eswatini"] },
  { name: "Lesotho" },
  { name: "Madagascar" },
  { name: "Malawi" },
  { name: "Mauritius" },
  { name: "Mozambique" },
  { name: "Namibia" },
  { name: "Seychelles" },
  { name: "South Africa" },
  { name: "Tanzania", synonyms: COUNTRY_SYNONYMS["Tanzania"] },
  { name: "Zambia" },
  { name: "Zimbabwe" }
]

/**
 * List of countries that are part of the Southern African Development Community Free Trade Area.
 */
const SADCFTA_COUNTRIES: CountryEntry[] = [
  ...SADC_COUNTRIES.filter((country) => country.name !== "Comoros" && country.name !== "Democratic Republic of the Congo")
]

/**
 * List of countries that are part of the Common Market for Eastern and Southern Africa.
 */
const COMESA_COUNTRIES: CountryEntry[] = [
  ...EAC_COUNTRIES.filter((country) => country.name !== "South Sudan" && country.name !== "Tanzania"),
  ...SADC_COUNTRIES.filter((country) => country.name !== "Angola" && country.name !== "Botswana" && country.name !== "Lesotho" && country.name !== "Mozambique" && country.name !== "Namibia" && country.name !== "South Africa" && country.name !== "Tanzania"),
  { name: "Djibouti" },
  { name: "Egypt" },
  { name: "Eritrea" },
  { name: "Ethiopia" },
  { name: "Libya" },
  { name: "Sudan" },
  { name: "Tunisia" }
]

/**
 * List of countries that are part of the South Asian Free Trade Area.
 */
const SAFTA_COUNTRIES: CountryEntry[] = [
  ...SAARC_COUNTRIES
]

/**
 * List of countries that are sanctioned by the US government.
 */
const SANCTIONED_COUNTRIES: CountryEntry[] = [
  { name: "Iran", synonyms: COUNTRY_SYNONYMS["Iran"] },
  { name: "Iraq" },
  { name: "Libya" },
  { name: "North Korea", synonyms: COUNTRY_SYNONYMS["North Korea"] },
  { name: "Somalia" },
  { name: "Sudan" },
  { name: "Syria", synonyms: COUNTRY_SYNONYMS["Syria"] },
  { name: "Yemen" }
]

/**
 * List of countries that are part of the Schengen Area.
 */
const SCHENGEN_COUNTRIES: CountryEntry[] = [
  ...EU_COUNTRIES.filter((country) => country.name !== "Cyprus" && country.name !== "Ireland"),
  { name: "Iceland" },
  { name: "Liechtenstein" },
  { name: "Norway" },
  { name: "Switzerland" }
]

/**
 * List of countries that are part of the Shanghai Cooperation Organisation.
 */
const SCO_COUNTRIES: CountryEntry[] = [
  { name: "Belarus" },
  { name: "China", synonyms: COUNTRY_SYNONYMS["China"] },
  { name: "India" },
  { name: "Iran", synonyms: COUNTRY_SYNONYMS["Iran"] },
  { name: "Kazakhstan" },
  { name: "Kyrgyzstan" },
  { name: "Pakistan" },
  { name: "Russia", synonyms: COUNTRY_SYNONYMS["Russia"] },
  { name: "Tajikistan" },
  { name: "Uzbekistan" }
]

/**
 * List of countries that are part of the Central American Integration System.
 */
const SICA_COUNTRIES: CountryEntry[] = [
  { name: "Belize" },
  { name: "Costa Rica" },
  { name: "Dominican Republic" },
  { name: "El Salvador" },
  { name: "Guatemala" },
  { name: "Honduras" },
  { name: "Nicaragua" },
  { name: "Panama" }
]

/**
 * List of countries that are part of the West African Economic and Monetary Union.
 */
const UEMOA_COUNTRIES: CountryEntry[] = [
  { name: "Benin" },
  { name: "Burkina Faso" },
  { name: "Guinea-Bissau" },
  { name: "Ivory Coast", synonyms: COUNTRY_SYNONYMS["Ivory Coast"] },
  { name: "Mali" },
  { name: "Niger" },
  { name: "Senegal" },
  { name: "Togo" }
]

/**
 * List of countries that are part of the Agreement between the United States of America, the United Mexican States, and Canada.
 */
const USMCA_COUNTRIES: CountryEntry[] = [
  { name: "Canada" },
  { name: "Mexico" },
  { name: "United States", synonyms: COUNTRY_SYNONYMS["United States"] }
]

const SIGNED_ATTR_INPUT_SIZE = 220
const DG1_INPUT_SIZE = 95
const E_CONTENT_INPUT_SIZE = 700

// Doing it this way as this fixes a weird issue where the constant arrays are not being exported
// if you export them directly when they are declared
export {
  AFRICA,
  EASTERN_AFRICA,
  MIDDLE_AFRICA,
  NORTHERN_AFRICA,
  SOUTHERN_AFRICA,
  WESTERN_AFRICA,
  AMERICAS,
  CARIBBEAN,
  CENTRAL_AMERICA,
  NORTHERN_AMERICA,
  SOUTH_AMERICA,
  ANTARCTICA,
  ASIA,
  CENTRAL_ASIA,
  EASTERN_ASIA,
  SOUTHEASTERN_ASIA,
  SOUTHERN_ASIA,
  WESTERN_ASIA,
  EUROPE,
  EASTERN_EUROPE,
  NORTHERN_EUROPE,
  SOUTHERN_EUROPE,
  WESTERN_EUROPE,
  OCEANIA,
  AUSTRALIA_NEW_ZEALAND,
  MELANESIA,
  MICRONESIA,
  POLYNESIA,
  ACS_COUNTRIES,
  AFTZ_COUNTRIES,
  ALADI_COUNTRIES,
  APEC_COUNTRIES,
  APTA_COUNTRIES,
  ARAB_LEAGUE_COUNTRIES,
  ARCTIC_COUNCIL_COUNTRIES,
  ASEAN_COUNTRIES,
  AU_COUNTRIES,
  AU_SUSPENDED_COUNTRIES,
  AFCFTA_COUNTRIES,
  BIMSTEC_COUNTRIES,
  BRIC_COUNTRIES,
  BRICS_COUNTRIES,
  BRICS_PLUS_COUNTRIES,
  BSEC_COUNTRIES,
  CAFTADR_COUNTRIES,
  CAN_COUNTRIES,
  CARICOM_COUNTRIES,
  CEFTA_COUNTRIES,
  CEMAC_COUNTRIES,
  CIS_COUNTRIES,
  CON_COUNTRIES,
  CPTPP_COUNTRIES,
  EAC_COUNTRIES,
  EAS_COUNTRIES,
  ECCAS_COUNTRIES,
  ECOWAS_COUNTRIES,
  ECOWAS_SUSPENDED_COUNTRIES,
  EFTA_COUNTRIES,
  EU_COUNTRIES,
  EEA_COUNTRIES,
  EUCU_COUNTRIES,
  EUROZONE_COUNTRIES,
  EURO_COUNTRIES,
  G7_COUNTRIES,
  G20_COUNTRIES,
  G24_COUNTRIES,
  GAFTA_COUNTRIES,
  GCC_COUNTRIES,
  IORA_COUNTRIES,
  MERCOSUR_COUNTRIES,
  MERCOSUR_SUSPENDED_COUNTRIES,
  NORDIC_COUNTRIES,
  NC_COUNTRIES,
  NPU_COUNTRIES,
  OAS_COUNTRIES,
  OECD_COUNTRIES,
  OIC_COUNTRIES,
  PA_COUNTRIES,
  PAFTA_COUNTRIES,
  PC_COUNTRIES,
  PIF_COUNTRIES,
  RCEP_COUNTRIES,
  SAARC_COUNTRIES,
  SACU_COUNTRIES,
  SADC_COUNTRIES,
  SADCFTA_COUNTRIES,
  COMESA_COUNTRIES,
  SAFTA_COUNTRIES,
  SANCTIONED_COUNTRIES,
  SCHENGEN_COUNTRIES,
  SCO_COUNTRIES,
  SICA_COUNTRIES,
  UEMOA_COUNTRIES,
  USMCA_COUNTRIES,
  SIGNED_ATTR_INPUT_SIZE,
  DG1_INPUT_SIZE,
  E_CONTENT_INPUT_SIZE
}
