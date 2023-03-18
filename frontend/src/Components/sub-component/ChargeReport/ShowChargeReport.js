import React,{useEffect} from 'react'
import { IndiapostHeader, CopyToSPOs, CopyToPM } from '../MiniComponent/MiniComponent'
const ShowChargeReport = ({data}) => {
  useEffect(() => {
    window.print();
  }, [])

  return (
    <div className='container'>
      <p>ACG - 61</p>
      <IndiapostHeader />
      <p className='text_center'>(See Rule 267, Posts and Telegraphs Financial Hand book, Volume 1, Second Edition)</p>
      <p className='text_center font18 bold m-0'>Charge Report </p>
      <p className='text_center underline'>Charge Report and Receipt for cash and Stamps on Transfer of Charge</p>
      <p>Certified that the charge of the office of <b>{data.officeName}</b> was made over by Shri/Smt/Sushri <b>{data.relieved}</b>, TO Shri/Smt/Sushri <b>{data.reliever}</b> at <b>{data.office}</b> on <b>{data.date}</b>. <b>{data.FnAn}</b> in accordance with Memo No. : <b>{data.memo}</b>   DATED THE <b>{data.memoDate}</b></p>
      <div className='row'>
        <div className='col-6 d-flex-column-center'>
          <p className='m-0'>Relieved Officer</p>
          <p><b>({data.relieved})</b></p>
        </div>
        <div className='col-6 d-flex-column-center'>
          <p className='m-0'>Relieving  Officer</p>
          <p><b>({data.reliever})</b></p>
        </div>
      </div>

      <p>●	Certified that the balances of this date of the several books including stock book and registers and accounts of the office have been checked and found correct.</p>
      <p>
        ●	Certified that the balances as detailed below were handed to me by the relieved officer and I accept the responsibility of the same.
      </p>

      <p className='text_center m-0'>Cash- <b>{data.cash}</b></p>
      <p className='text_center m-0'>Stamps Imprest made up of-</p>
      <p className='text_center m-0'>(1)  Stamps- <b>{data.stamp}</b></p>
      <p className='text_center m-0'>(2)  Cash-</p>

      <div className='row'>
        <div className='col-6 d-flex-column-center'>
          <p className='m-0'>Relieved Officer</p>
          <p><b>({data.relieved})</b></p>
        </div>
        <div className='col-6 d-flex-column-center'>
          <p className='m-0'>Relieving  Officer</p>
          <p><b>({data.reliever})</b></p>
        </div>
      </div>

      <p className='underline'>Copy of this charge report is issued to :-</p>
      <div className='ml-2'>
        <p className='m-0'>(1) {data.relieved}</p>
        <p className='m-0'>(2) {data.reliever}</p>
        <p className='m-0'>(3-4) PF of the offcials</p>
        <p className='m-0'>(5) Office Copy</p>
        <div className='m-0'>(6){<CopyToSPOs />}</div>
        <div className='m-0'>(7){<CopyToPM />}</div>
      </div>
    </div>
  )
}


export default ShowChargeReport