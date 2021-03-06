'use strict'

const setDokumenter = require('../../lib/setDokumenter')
const test = require('ava')

test('it requires options', async t => {
  try {
    setDokumenter()
  } catch (e) {
    t.true(e.message.includes('Missing required input: options object'), 'missing options')
  }
})

test('it requires options.dokumenter', async t => {
  const options = {}
  try {
    setDokumenter(options)
  } catch (e) {
    t.true(e.message.includes('Missing required input: options.dokumenter'), 'missing dokumenter')
  }
})

test('it requires options.dokumenter to be an array', async t => {
  const options = {
    dokumenter: true
  }
  try {
    setDokumenter(options)
  } catch (e) {
    t.true(e.message.includes('Wrong input type: options.dokumenter must be an array'), 'missing [dokumenter]')
  }
})

test('it requires dokument.filsti', async t => {
  const options = {
    dokumenter: []
  }
  try {
    setDokumenter(options)
  } catch (e) {
    t.true(e.message.includes('Missing required input: options.dokumenter.filsti'), 'missing dokument.filsti')
  }
})

test('it requires dokument.mimetype', async t => {
  const options = {
    dokumenter: [
      {
        filsti: true
      }
    ]
  }
  try {
    setDokumenter(options)
  } catch (e) {
    t.true(e.message.includes('Missing required input: options.dokumenter.mimetype'), 'missing dokument.mimetype')
  }
})

test('it returns expected data', async t => {
  const options = {
    dokumenter: [
      {
        filsti: 'test/data/skoleskyss_avslag_vedtak.pdf',
        mimetype: true
      }
    ]
  }
  try {
    const dokumenter = setDokumenter(options)
    t.truthy(dokumenter, 'it woiks')
  } catch (error) {
    throw error
  }
})
