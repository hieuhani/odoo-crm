/* eslint-disable import/prefer-default-export */
import odoo from '@/odoo'

export function fetchCustomer({ commit }, payload) {
  odoo.query({
    method: 'read',
    model: 'res.partner',
    args: [[Number(payload)], [
      'opportunity_count',
      'meeting_count',
      'active',
      'image',
      '__last_update',
      'is_company',
      'commercial_partner_id',
      'company_type',
      'name',
      'parent_id',
      'company_name',
      'type',
      'street',
      'street2',
      'city',
      'state_id',
      'zip',
      'country_id',
      'vat',
      'category_id',
      'function',
      'phone',
      'mobile',
      'user_ids',
      'email',
      'website',
      'title',
      'lang',
      'child_ids',
      'comment',
      'customer',
      'user_id',
      'opt_out',
      'message_bounce',
      'supplier',
      'ref',
      'company_id',
      'industry_id',
      'message_follower_ids',
      'activity_ids',
      'message_ids',
      'display_name',
    ]],
  }).then(({ data }) => {
    commit('setCustomer', data.result[0])
  })
}

export function fetchCustomerContact({ commit }, payload) {
  odoo.query({
    method: 'read',
    model: 'res.partner',
    args: [payload, [
      'color',
      'name',
      'title',
      'type',
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
      'state_id',
      'image_small',
      'lang',
      'comment',
      'customer',
      'display_name',
      'supplier',
    ]],
  }).then(({ data }) => {
    commit('setCustomerContacts', data.result)
  })
}
