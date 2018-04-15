/* eslint-disable import/prefer-default-export */
import odoo from '@/odoo'

export function fetchCustomers({ commit }) {
  odoo.query({
    method: 'search_read',
    model: 'res.partner',
    domain: [
      ['customer', '=', 1],
      ['parent_id', '=', false],
    ],
    fields: [
      'id',
      'color',
      'display_name',
      'title',
      'email',
      'parent_id',
      'is_company',
      'function',
      'phone',
      'street',
      'street2',
      'zip',
      'city',
      'country_id',
      'mobile',
      'opportunity_count',
      'meeting_count',
      'state_id',
      'category_id',
      'image_small',
      'type',
    ],
    limit: 80,
  }).then(({ data }) => {
    commit('setCustomers', data.result)
  })
}
