import { OdooRPC } from 'node-odoorpc'

const odoo = new OdooRPC({
  domain: 'http://localhost',
  port: 8069,
})

export default odoo
