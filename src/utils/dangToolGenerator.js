// src/utils/dangToolGenerator.js

import { fractionToDecimal, formatNumber } from './formatting'

export function generateDangToolID(formFields, definition) {
  let output = definition.description_formula

  definition.fields.forEach(field => {
    let value = formFields[field] || ''

    if (field.includes('Diameter') || field.includes('Length') || field.includes('Radius')) {
      value = fractionToDecimal(value)
    }

    output = output.replaceAll(`{${field}}`, value)
  })

  return output
}
