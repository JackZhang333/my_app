// /pages/api/test-state.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '../../utils/server' // 确保这里路径正确

import { NextResponse } from 'next/server'

export async function GET() {

  const year = 1989
  const month = 9
  const day = 7
  const hour = 6
    const supabase = createClient();
  const { data, error } = await supabase.rpc('get_state_by_time', {
    input_year: year,
    input_month: month,
    input_day: day,
    input_hour: hour,
  })

  if (error) {
    console.error('RPC Error:', error)
    return NextResponse.json({ message: 'RPC call failed', error: error.message }, { status: 500 })
  }

  console.log('RPC Result:', data)
  return NextResponse.json({ message: 'RPC call success', data })
}