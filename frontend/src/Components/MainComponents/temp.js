import React, { useState, useRef } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import TextField from '@mui/material/TextField';
import IRFinal from '../sub-component/IR/Report/IRFinal';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const IRS = () => {
    var newArray;
    const [page1, setPage1] = useState({
        BO: "",
        AO: "",
        HO: "",
        facilityID: "",
        profitCenter: "",
        BOopening: "",
        DLISSP: "",
        DLI: "",
        DLIby: "",
        SubsequentVisit: "",
        MOVisit: ""
    });
    const [page2, setPage2] = useState({
        rom: "1130 HRS",
        dom: "1145 HRS",
        lbc: "1345 HRS",
        dispatch: "1400 HRS",
        MAB_min: "RS 3500",
        MAB_max: "RS 5000",
        PSAB_min: "RS 200",
        PSAB_max: "RS 1000",
        location: "",
        mailArrangement: "सहायक शाखा डाकपाल द्वारा ",
        village: "",
        panchayat: ""
    });
    const [page3, setPage3] = useState([{
        Name: "",
        Designation: "",
        Community: "",
        EmployeeId: "",
        TRCA: "",
        DOB: "",
        DOJ: ""
    },
    {
        Name: "",
        Designation: "",
        Community: "",
        EmployeeId: "",
        TRCA: "",
        DOB: "",
        DOJ: ""
    },
    {
        Name: "",
        Designation: "",
        Community: "",
        EmployeeId: "",
        TRCA: "",
        DOB: "",
        DOJ: ""
    }]);
    const [page4, setPage4] = useState({
        complaint: [true, true],
        postmarks: [true, true],
        stock: [true, true],
        enumeration: [false, false],
        yearlyvaluereturns: [false, false],
        errorbook: [true, true],
        villagesortinglist: [false, false],
        routelist: [false, false]

    });
    const [page5, setPage5] = useState({
        mcd: "उपलब्ध नहीं है ",
        imeiNumber: "उपलब्ध नहीं है ",
        kaifa: "उपलब्ध नहीं है ",
        barcode: "उपलब्ध नहीं है ",
        ippbphone: "उपलब्ध नहीं है ",
        solar: "उपलब्ध नहीं है ",
        sim: "उपलब्ध नहीं है "
    });
    const [page6, setPage6] = useState({
        signal: 0,

        articleDeposit: "",
        articleBeyondPrescribedPeriod: "",
        Missent: "",
        VParticle: "",
        noLetterBox: "",
        sp: "",
        rl: "",
        parcel: "",
        emo: "",
        ord: "",
        vpcod: "",

        cash: 0,
        ps: 0,
        rs: 0,
        dtrTallied: true,
        emoPayment: "",


    });
    const [page6DTR, setPage6DTR] = useState([
        {
            date: "",
            boBal: "",
            dtrBal: ""
        },
        {
            date: "",
            boBal: "",
            dtrBal: ""
        },
        {
            date: "",
            boBal: "",
            dtrBal: ""
        },
        {
            date: "",
            boBal: "",
            dtrBal: ""
        },
        {
            date: "",
            boBal: "",
            dtrBal: ""
        },
        {
            date: "",
            boBal: "",
            dtrBal: ""
        }
    ]);
    const [abc, setAbc] = useState(true);
    const [sb26f, setsb26f] = useState([{
        bookNo: "",
        from: "",
        fromdate: "",
        fromamount: "",
        to: "",
        todate: "",
        toamount: ""
    }])
    const [ms87f, setms87f] = useState([{
        from: "",
        fromdate: "",
        fromamount: "",
        to: "",
        todate: "",
        toamount: ""
    }])
    const [sb28f, setsb28f] = useState([{
        bookNo: "",
        from: "",
        fromdate: "",
        fromamount: "",
        to: "",
        todate: "",
        toamount: ""
    }])
    const [plif, setplif] = useState([{
        bookNo: "",
        from: "",
        fromdate: "",
        fromamount: "",
        to: "",
        todate: "",
        toamount: ""
    }])
    const [ssbook, setSSBook] = useState([
        {
            accountNo: "",
            signature: "",
            photograph: ""
        },
        {
            accountNo: "",
            signature: "",
            photograph: ""
        },
        {
            accountNo: "",
            signature: "",
            photograph: ""
        },
        {
            accountNo: "",
            signature: "",
            photograph: ""
        },
        {
            accountNo: "",
            signature: "",
            photograph: ""
        },
        {
            accountNo: "",
            signature: "",
            photograph: ""
        }

    ])
    const [sbrd, setSBRD] = useState([
        {
            sbAccount: "",
            sbDLT: "",
            sbBAT: "",
            rdAccount: "",
            rdDLT: "",
            rdBAT: ""

        },
        {
            sbAccount: "",
            sbDLT: "",
            sbBAT: "",
            rdAccount: "",
            rdDLT: "",
            rdBAT: ""

        },
        {
            sbAccount: "",
            sbDLT: "",
            sbBAT: "",
            rdAccount: "",
            rdDLT: "",
            rdBAT: ""

        },
        {
            sbAccount: "",
            sbDLT: "",
            sbBAT: "",
            rdAccount: "",
            rdDLT: "",
            rdBAT: ""

        },
        {
            sbAccount: "",
            sbDLT: "",
            sbBAT: "",
            rdAccount: "",
            rdDLT: "",
            rdBAT: ""

        },
        {
            sbAccount: "",
            sbDLT: "",
            sbBAT: "",
            rdAccount: "",
            rdDLT: "",
            rdBAT: ""

        },
    ])
    const [ssatd, setSSATD] = useState([
        {
            ssaAccount: "",
            ssaDLT: "",
            ssaBAT: "",
            tdAccount: "",
            tdDLT: "",
            tdBAT: ""

        },
        {
            ssaAccount: "",
            ssaDLT: "",
            ssaBAT: "",
            tdAccount: "",
            tdDLT: "",
            tdBAT: ""

        },
        {
            ssaAccount: "",
            ssaDLT: "",
            ssaBAT: "",
            tdAccount: "",
            tdDLT: "",
            tdBAT: ""

        },
        {
            ssaAccount: "",
            ssaDLT: "",
            ssaBAT: "",
            tdAccount: "",
            tdDLT: "",
            tdBAT: ""

        },
        {
            ssaAccount: "",
            ssaDLT: "",
            ssaBAT: "",
            tdAccount: "",
            tdDLT: "",
            tdBAT: ""

        },
        {
            ssaAccount: "",
            ssaDLT: "",
            ssaBAT: "",
            tdAccount: "",
            tdDLT: "",
            tdBAT: ""

        },
    ])
    const [txn, setTXN] = useState([
        {
            date: "",
            sbd: "",
            sbw: "",
            rdd: "",
            rdw: "",
            tdd: "",
            ssad: "",
            ippbd: "",
            celc: "",
            csc: "",
            ippbw: "",

        },
        {
            date: "",
            sbd: "",
            sbw: "",
            rdd: "",
            rdw: "",
            tdd: "",
            ssad: "",
            ippbd: "",
            celc: "",
            csc: "",
            ippbw: "",

        },
        {
            date: "",
            sbd: "",
            sbw: "",
            rdd: "",
            rdw: "",
            tdd: "",
            ssad: "",
            ippbd: "",
            celc: "",
            csc: "",
            ippbw: "",

        },
        {
            date: "",
            sbd: "",
            sbw: "",
            rdd: "",
            rdw: "",
            tdd: "",
            ssad: "",
            ippbd: "",
            celc: "",
            csc: "",
            ippbw: "",

        }

    ])
    const [plipass, setplipass] = useState([
        {
            policyNo: "",
            dlc: "",
            premium: ""
        },
        {
            policyNo: "",
            dlc: "",
            premium: ""
        },
        {
            policyNo: "",
            dlc: "",
            premium: ""
        },
        {
            policyNo: "",
            dlc: "",
            premium: ""
        },
        {
            policyNo: "",
            dlc: "",
            premium: ""
        },
    ])
    const [pli, setpli] = useState([
        {
            date1: "",
            amount1: "",
            date2: "",
            amount2: "",
            date3: "",
            amount3: ""
        },
        {
            date1: "",
            amount1: "",
            date2: "",
            amount2: "",
            date3: "",
            amount3: ""
        },
        {
            date1: "",
            amount1: "",
            date2: "",
            amount2: "",
            date3: "",
            amount3: ""
        }
    ])



    const [page6Selects, setPage6Selects] = useState({
        solarAvailable: false,
        solarInstallationReport: false,
        solarworking: false,
        dtr: false,
        rollout: false,
    })


    const updateArrayState = (e, index, state, changeState) => {
        newArray = state.map((item, i) => {
            if (index === i) {
                return { ...item, [e.target.name]: e.target.value };
            } else {
                return item;
            }
        });
        changeState(newArray);
    };




    const updateState = (index) => (e) => {
        newArray = pageS6DTR.map((item, i) => {
            if (index === i) {
                return { ...item, [e.target.name]: e.target.value };
            } else {
                return item;
            }
        });
        pageS6DTR = newArray;
    };


    const updateSB26 = (index) => (e) => {
        newArray = sb26f.map((item, i) => {

            if (index === i) {
                return { ...item, [e.target.name]: e.target.value };
            } else {
                return item;
            }

        });
        setsb26f(newArray)
    };

    const updateSB28 = (index) => (e) => {
        newArray = sb28f.map((item, i) => {
            if (index === i) {
                return { ...item, [e.target.name]: e.target.value };
            } else {
                return item;
            }
        });
        setsb28f(newArray);
    };

    const updatePLI2 = (index) => (e) => {
        newArray = plif.map((item, i) => {
            if (index === i) {
                return { ...item, [e.target.name]: e.target.value };
            } else {
                return item;
            }
        });
        setplif(newArray);
    };

    const updateMS87 = (index) => (e) => {
        newArray = ms87f.map((item, i) => {
            if (index === i) {
                return { ...item, [e.target.name]: e.target.value };
            } else {
                return item;
            }
        });
        setms87f(newArray);
    };

    const page7 = {}

    const updateSSbook = (index) => (e) => {
        newArray = ssbook.map((item, i) => {
            if (index === i) {
                return { ...item, [e.target.name]: e.target.value };
            } else {
                return item;
            }
        });
        setSSBook(newArray);
    };

    const updatesbrd = (index) => (e) => {
        newArray = sbrd.map((item, i) => {
            if (index === i) {
                return { ...item, [e.target.name]: e.target.value };
            } else {
                return item;
            }
        });
        setSBRD(newArray);
    };

    const updatessatd = (index) => (e) => {
        newArray = ssatd.map((item, i) => {
            if (index === i) {
                return { ...item, [e.target.name]: e.target.value };
            } else {
                return item;
            }
        });
        setSSATD(newArray);
    };


    const updatetxn = (index) => (e) => {
        newArray = txn.map((item, i) => {
            if (index === i) {
                return { ...item, [e.target.name]: e.target.value };
            } else {
                return item;
            }
        });
        setTXN(newArray);
    };

    const updateplipass = (index) => (e) => {
        newArray = plipass.map((item, i) => {
            if (index === i) {
                return { ...item, [e.target.name]: e.target.value };
            } else {
                return item;
            }
        });
        setplipass(newArray);
    };


    const updatepli = (index) => (e) => {
        newArray = pli.map((item, i) => {
            if (index === i) {
                return { ...item, [e.target.name]: e.target.value };
            } else {
                return item;
            }
        });
        setpli(newArray);
    };


    const updateTextbox = (e, state, changeState) => {
        newArray = state;
        newArray[e.target.name] = e.target.value;
        changeState(newArray)
    }

    return (
        <div className='container pageCenter'>
            {abc ? <div>

                {/* <IRPage1 /> */}


                <div style={{ width: '70%' }}>
                    <table className='table'>
                        <tr>
                            <th>Information</th>
                            <th>Details</th>
                        </tr>
                        <tr>
                            <td><p className='Details'>Name of The BO</p></td>
                            <td><TextField id="standard-basic" label="BO Name" variant="standard" name='BO'
                                onChange={(e) => updateTextbox(e, page1, setPage1)}

                            /></td>
                        </tr><tr>
                            <td><p className='Details'>Name of The AO</p></td>
                            <td><TextField id="standard-basic" label="AO Name" variant="standard" name='AO'
                                onChange={(e) => updateTextbox(e, page1, setPage1)}
                            /></td>
                        </tr><tr>
                            <td><p className='Details'>Name of The HO</p></td>
                            <td><TextField id="standard-basic" label="HO Name" variant="standard" name='HO'
                                onChange={(e) => updateTextbox(e, page1, setPage1)}
                            /></td>
                        </tr><tr>
                            <td><p className='Details'>Facility ID</p></td>
                            <td><TextField id="standard-basic" label="Facility ID" variant="standard"
                                name='facilityID'
                                onChange={(e) => updateTextbox(e, page1, setPage1)}
                            /></td>
                        </tr><tr>
                            <td><p className='Details'>Profit/Cost Center</p></td>
                            <td><TextField id="standard-basic" label="Profit Center" variant="standard"
                                name='profitCenter'
                                onChange={(e) => updateTextbox(e, page1, setPage1)} /></td>
                        </tr><tr>
                            <td><p className='Details'>Date of Opening of BO</p></td>
                            <td><TextField id="standard-basic" label="BO Opening Date" variant="standard"
                                name='BOopening'
                                onChange={(e) => updateTextbox(e, page1, setPage1)}
                            /></td>
                        </tr><tr>
                            <td><p className='Details'>Date of Last inspection by SSPOs/SPOs</p></td>
                            <td><TextField id="standard-basic" label="DLI of SSPOs" variant="standard"
                                name='DLISSP'
                                onChange={(e) => updateTextbox(e, page1, setPage1)}
                            /></td>
                        </tr><tr>
                            <td><p className='Details'>Date of Last Inspection</p></td>
                            <td><TextField id="standard-basic" label="DLI" variant="standard" name='DLI'
                                onChange={(e) => updateTextbox(e, page1, setPage1)}
                            /></td>
                        </tr><tr>
                        </tr><tr>
                            <td><p className='Details'>Last Inspected By</p></td>
                            <td><TextField id="standard-basic" label="Inspected By" variant="standard"
                                name='DLIby'
                                onChange={(e) => updateTextbox(e, page1, setPage1)}

                            /></td>
                        </tr><tr>
                        </tr><tr>
                            <td><p className='Details'>Date of Subsequential Visits</p></td>
                            <td><TextField id="standard-basic" label="Subsequential Visit" variant="standard"
                                name='SubsequentVisit'
                                onChange={(e) => updateTextbox(e, page1, setPage1)} /></td>
                        </tr><tr>
                        </tr><tr>
                            <td><p className='Details'>Date of Visits by Mail Overseer</p></td>
                            <td><TextField id="standard-basic" label="Mail Overseer Visit" variant="standard"
                                name='MOVisit'
                                onChange={(e) => updateTextbox(e, page1, setPage1)} /></td>
                        </tr>
                    </table>
            </div>



                {/* <IRPage2 /> */}
                <div style={{ width: '70%' }}>
                    <table className='table'>
                        <tr>
                            <th>Information</th>
                            <th colspan="2">Details</th>
                        </tr>
                        <tr>
                            <td><p className='Details'>Receipt of Mail</p></td>
                            <td colspan="2"><TextField id="standard-basic" variant="standard"
                                name='rom'
                                onChange={(e) => updateTextbox(e, page2, setPage2)} defaultValue={page2.rom} /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Delivery of Mail</p></td>
                            <td colspan="2"><TextField id="standard-basic" variant="standard"
                                name='dom'
                                onChange={(e) => updateTextbox(e, page2, setPage2)} defaultValue={page2.dom} /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>LB Clearance</p></td>
                            <td colspan="2"><TextField id="standard-basic" variant="standard" name='lbc'
                                onChange={(e) => updateTextbox(e, page2, setPage2)} defaultValue={page2.lbc} /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Despatch of Mails</p></td>
                            <td colspan="2"><TextField id="standard-basic" variant="standard" name='dispatch'
                                onChange={(e) => updateTextbox(e, page2, setPage2)} defaultValue={page2.dispatch} /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Authorised Balance</p></td>
                            <td><TextField id="standard-basic" variant="standard" name='MAB_min'
                                onChange={(e) => updateTextbox(e, page2, setPage2)} defaultValue={page2.MAB_min} /></td>
                            <td><TextField id="standard-basic" variant="standard" name='MAB_max'
                                onChange={(e) => updateTextbox(e, page2, setPage2)} defaultValue={page2.MAB_max} /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Postage Authorised Balance</p></td>
                            <td><TextField id="standard-basic" variant="standard" name='PSAB_min'
                                onChange={(e) => updateTextbox(e, page2, setPage2)} defaultValue={page2.PSAB_min} /></td>
                            <td><TextField id="standard-basic" variant="standard" name='PSAB_max'
                                onChange={(e) => updateTextbox(e, page2, setPage2)} defaultValue={page2.PSAB_max} /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Location Of BO</p></td>
                            <td colspan="2"><TextField id="standard-basic" label="BO Location" variant="standard" name='location'
                                onChange={(e) => updateTextbox(e, page2, setPage2)} /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Villages Served</p></td>
                            <td colspan="2"><TextField id="standard-basic" label="Villages Details" variant="standard" name='village'
                                onChange={(e) => updateTextbox(e, page2, setPage2)} /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Panchayat Headquarters</p></td>
                            <td colspan="2"><TextField id="standard-basic" label="Panchayat HQ" variant="standard" name='panchayat'
                                onChange={(e) => updateTextbox(e, page2, setPage2)} /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Mail Arrangement</p></td>
                            <td colspan="2"><TextField id="standard-basic" variant="standard" name='mailArrangement'
                                onChange={(e) => updateTextbox(e, page2, setPage2)} defaultValue={page2.mailArrangement} /></td>
                        </tr>
                    </table>
        </div>   


                {/* <IRPage3 /> */}
                <table className='table'>
                    <tr>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Community</th>
                        <th>Employee Id</th>
                        <th>TRCA</th>
                        <th>Date of Birth</th>
                        <th>Date of Joining</th>

                    </tr>

                    {page3.map((data, index) => {
                        return <tr key={index}>
                            <td><TextField id="standard-basic" variant="standard"
                                name='Name'
                                onChange={(e)=>updateArrayState(e,index,page3,setPage3)} /></td>
                            <td><TextField id="standard-basic" placeholder='GDSBPM' variant="standard"
                                name='Designation'
                                onChange={(e)=>updateArrayState(e,index,page3,setPage3)} /></td>
                            <td><TextField id="standard-basic" variant="standard"
                                name='Community'
                                onChange={(e)=>updateArrayState(e,index,page3,setPage3)} /></td>
                            <td><TextField id="standard-basic" variant="standard"
                                name='EmployeeId'
                                onChange={(e)=>updateArrayState(e,index,page3,setPage3)} /></td>
                            <td><TextField id="standard-basic" variant="standard"
                                name='TRCA'
                                onChange={(e)=>updateArrayState(e,index,page3,setPage3)} /></td>
                            <td><TextField id="standard-basic" variant="standard"
                                name='DOB'
                                onChange={(e)=>updateArrayState(e,index,page3,setPage3)} /></td>
                            <td><TextField id="standard-basic" variant="standard"
                                name='DOJ'
                                onChange={(e)=>updateArrayState(e,index,page3,setPage3)} /></td>

                        </tr>
                    })}


                    
                </table>


                {/* <IRPage4 /> */}
                <div style={{ width: '70%' }}>
                    <table className='table'>
                        <tr>
                            <th>Name of the Record</th>
                            <th>Remarks</th>
                        </tr>
                        <tr>
                            <td>Complaint and Suggestion Book</td>
                            <td><Checkbox label="Available" defaultChecked onChange={(e) => { if (e.target.checked) { page4.complaint[0] = true } else { page4.complaint[0] = false } }} /><>Available in BO </><Checkbox label="Maintained" defaultChecked onChange={(e) => { if (e.target.checked) { page4.complaint[1] = true } else { page4.complaint[1] = false } }} /><>Maintained the document correctly</></td>
                        </tr>
                        <tr>
                            <td>Book of Postmarks</td>
                            <td><Checkbox label="Available" defaultChecked onChange={(e) => { if (e.target.checked) { page4.postmarks[0] = true } else { page4.postmarks[0] = false } }} /><>Available in BO </><Checkbox label="Maintained" defaultChecked onChange={(e) => { if (e.target.checked) { page4.postmarks[1] = true } else { page4.postmarks[1] = false } }} /><>Maintained the document correctly</></td>
                        </tr>
                        <tr>
                            <td>Stock Book</td>
                            <td><Checkbox label="Available" defaultChecked onChange={(e) => { if (e.target.checked) { page4.stock[0] = true } else { page4.stock[0] = false } }} /><>Available in BO </><Checkbox label="Maintained" defaultChecked onChange={(e) => { if (e.target.checked) { page4.stock[1] = true } else { page4.stock[1] = false } }} /><>Maintained the document correctly</></td>
                        </tr>
                        <tr>
                            <td>Half Yearly Enumeration</td>
                            <td><Checkbox label="Available" onChange={(e) => { if (e.target.checked) { page4.enumeration[0] = true } else { page4.enumeration[0] = false } }} /><>Available in BO </><Checkbox label="Maintained" onChange={(e) => { if (e.target.checked) { page4.enumeration[1] = true } else { page4.enumeration[1] = false } }} /><>Maintained the document correctly</></td>
                        </tr>
                        <tr>
                            <td>Yearly Value returns</td>
                            <td><Checkbox label="Available" onChange={(e) => { if (e.target.checked) { page4.yearlyvaluereturns[0] = true } else { page4.yearlyvaluereturns[0] = false } }} /><>Available in BO </><Checkbox label="Maintained" onChange={(e) => { if (e.target.checked) { page4.yearlyvaluereturns[1] = true } else { page4.yearlyvaluereturns[1] = false } }} /><>Maintained the document correctly</></td>
                        </tr>
                        <tr>
                            <td>Error Book</td>
                            <td><Checkbox label="Available" defaultChecked onChange={(e) => { if (e.target.checked) { page4.errorbook[0] = true } else { page4.errorbook[0] = false } }} /><>Available in BO </><Checkbox label="Maintained" defaultChecked onChange={(e) => { if (e.target.checked) { page4.errorbook[1] = true } else { page4.errorbook[1] = false } }} /><>Maintained the document correctly</></td>
                        </tr>
                        <tr>
                            <td>Village Sorting List</td>
                            <td><Checkbox label="Available" onChange={(e) => { if (e.target.checked) { page4.villagesortinglist[0] = true } else { page4.villagesortinglist[0] = false } }} /><>Available in BO </><Checkbox label="Maintained" onChange={(e) => { if (e.target.checked) { page4.villagesortinglist[1] = true } else { page4.villagesortinglist[1] = false } }} /><>Maintained the document correctly</></td>
                        </tr>
                        <tr>
                            <td>Route list and Beat Map</td>
                            <td><Checkbox label="Available" onChange={(e) => { if (e.target.checked) { page4.routelist[0] = true } else { page4.routelist[0] = false } }} /><>Available in BO </><Checkbox label="Maintained" onChange={(e) => { if (e.target.checked) { page4.routelist[1] = true } else { page4.routelist[1] = false } }} /><>Maintained the document correctly</></td>
                        </tr>
                    </table>
                </div> 


                {/* <IRPage5 /> */}
                <div style={{ width: '70%' }}>
                    <table className='table'>
                        <tr>
                            <th>Name of the Record</th>
                            <th>Remarks</th>
                        </tr>
                        <tr>
                            <td>Main Computing Device (MCD)</td>
                            <td><TextField id="standard-basic" variant="standard" onChange={(e) => page5.mcd = e.target.value} /></td>
                        </tr>
                        <tr>
                            <td>IMEI Number of MCD</td>
                            <td><TextField id="standard-basic" variant="standard" onChange={(e) => page5.imeiNumber = e.target.value} /></td>
                        </tr>
                        <tr>
                            <td>Kaifya/Sunyard Pin Pad (P-90)</td>
                            <td><TextField id="standard-basic" variant="standard" onChange={(e) => page5.kaifa = e.target.value} /></td>
                        </tr>
                        <tr>
                            <td>Barcode Scanner</td>
                            <td><TextField id="standard-basic" variant="standard" onChange={(e) => page5.barcode = e.target.value} /></td>
                        </tr>
                        <tr>
                            <td>IPPB Smart phone supplied to the BPM / ABPM</td>
                            <td><TextField id="standard-basic" variant="standard" onChange={(e) => page5.ippbphone = e.target.value} /></td>
                        </tr>
                        <tr>
                            <td>Solar UPS</td>
                            <td><TextField id="standard-basic" variant="standard" onChange={(e) => page5.solar = e.target.value} /></td>
                        </tr>
                        <tr>
                            <td>Type of the NSP SIM supplied and activated in the Device</td>
                            <td><TextField id="standard-basic" variant="standard" onChange={(e) => page5.sim = e.target.value} /></td>
                        </tr>

                    </table>
            </div>    



                {/* <IRPage6 /> */}
                <div style={{ width: '70%' }}>
                    <table className='table'>
                        <tr>
                            <td>Signal Strength</td>
                            <td><TextField id="standard-basic" variant="standard" onChange={(e) => page6.signal = e.target.value} /></td>
                        </tr>
                        <tr>
                            <td>Solar Panel Available</td>
                            <td>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name='solarAvailable'
                                    value={pageS6Selects.solarAvailable}
                                    onChange={(e) => {
                                        var newArray = pageS6Selects;
                                        newArray[e.target.name] = e.target.value;
                                        setPageS6Selects(newArray);
                                    }}
                                >
                                    <MenuItem value={true}>Available</MenuItem>
                                    <MenuItem value={false}>Not Available</MenuItem>
                                </Select>

                            </td>
                        </tr>
                        <tr>
                            <td>Solar Panel Installation Report</td>
                            <td><Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='solarInstallationReport'
                                value={pageS6Selects.solarInstallationReport}
                                onChange={(e) => {
                                    var newArray = pageS6Selects;
                                    newArray[e.target.name] = e.target.value;
                                    setPageS6Selects(newArray);
                                }}
                            >
                                <MenuItem value={true}>Available</MenuItem>
                                <MenuItem value={false}>Not Available</MenuItem>
                            </Select>

                            </td>
                        </tr>
                        <tr>
                            <td>Solar Panel And UPS Working</td>
                            <td><Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='solarworking'
                                value={pageS6Selects.solarworking}
                                onChange={(e) => {
                                    var newArray = pageS6Selects;
                                    newArray[e.target.name] = e.target.value;
                                    setPageS6Selects(newArray);
                                }}
                            >

                                <MenuItem value={true}>Available</MenuItem>
                                <MenuItem value={false}>Not Available</MenuItem>
                            </Select>
                            </td>
                        </tr>
                        <tr>
                            <td>Article in deposit</td>
                            <td><TextField id="standard-basic" variant="standard" onChange={(e) => page6.articleDeposit = e.target.value} /></td>
                        </tr>
                        <tr>
                            <td>Article Beyond prescribed period</td>
                            <td><TextField id="standard-basic" variant="standard" onChange={(e) => page6.articleBeyondPrescribedPeriod = e.target.value} /></td>
                        </tr>
                        <tr>
                            <td>Missent Article</td>
                            <td><TextField id="standard-basic" variant="standard" onChange={(e) => page6.Missent = e.target.value} /></td>
                        </tr>
                        <tr>
                            <td>VP Article since DLI if any</td>
                            <td><TextField id="standard-basic" variant="standard" onChange={(e) => page6.VParticle = e.target.value} /></td>
                        </tr>
                        <tr>
                            <td>Number of Letterboxes</td>
                            <td><TextField id="standard-basic" variant="standard" onChange={(e) => page6.noLetterBox = e.target.value} /></td>
                        </tr>
                        <tr>
                            <td>Number of EMO Payments in year</td>
                            <td><TextField id="standard-basic" variant="standard" onChange={(e) => page6.emoPayment = e.target.value} /></td>
                        </tr>
                        <tr>
                            <td>DTR sent daily to BO</td>
                            <td><Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='dtr'
                                value={pageS6Selects.dtr}
                                onChange={(e) => {
                                    var newArray = pageS6Selects;
                                    newArray[e.target.name] = e.target.value;
                                    setPageS6Selects(newArray);
                                }}
                            >
                                <MenuItem value={true}>Yes</MenuItem>
                                <MenuItem value={false}>No</MenuItem>
                            </Select>
                            </td>
                        </tr>
                        <tr>
                            <td>Device Roll Out?</td>
                            <td><Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='rollout'
                                value={pageS6Selects.rollout}
                                onChange={(e) => {
                                    var newArray = pageS6Selects;
                                    newArray[e.target.name] = e.target.value;
                                    setPageS6Selects(newArray);
                                }}
                            >
                                <MenuItem value={true}>Yes</MenuItem>
                                <MenuItem value={false}>No</MenuItem>
                            </Select>
                            </td>
                        </tr>


                    </table>
                    <table className='table'>
                        <tr>
                            <td>Articles in bag on Inspection day</td>
                            <td><TextField id="standard-basic" label='SP' variant="standard" onChange={(e) => page6.sp = e.target.value} /></td>
                            <td><TextField id="standard-basic" label='RL' variant="standard" onChange={(e) => page6.rl = e.target.value} /></td>
                            <td><TextField id="standard-basic" label='PARCEL' variant="standard" onChange={(e) => page6.parcel = e.target.value} /></td>
                            <td><TextField id="standard-basic" label='EMO' variant="standard" onChange={(e) => page6.emo = e.target.value} /></td>
                            <td><TextField id="standard-basic" label='ORD' variant="standard" onChange={(e) => page6.ord = e.target.value} /></td>
                            <td><TextField id="standard-basic" label='VP/COD' variant="standard" onChange={(e) => page6.vpcod = e.target.value} /></td>
                        </tr>
                    </table>
                    <table className='table'>
                        <tr>
                            <th>Cash<Checkbox label="Available" defaultChecked onChange={(e) => { if (e.target.checked) { page6.dtrTallied = true } else { page6.dtrTallied = false } }} /><>DTR Tallied </></th>
                            <th>Postage Stamp</th>
                            <th>Revenue Stamp</th>
                        </tr>
                        <tr>
                            <td><TextField id="standard-basic" label='CASH' variant="standard" onChange={(e) => page6.cash = e.target.value} /></td>
                            <td><TextField id="standard-basic" label='PS' variant="standard" onChange={(e) => page6.ps = e.target.value} /></td>
                            <td><TextField id="standard-basic" label='RS' variant="standard" onChange={(e) => page6.rs = e.target.value} /></td>
                        </tr>
                    </table>
                    <table className='table'>
                        <tr>
                            <th>Date</th>
                            <th>Balance in BO</th>
                            <th>DTR Balance</th>
                        </tr>
                        {page6DTR.map((data, index) => {
                            return <><tr>

                                <td><TextField id="standard-basic" label='Date' variant="standard" name="date"
                                    onChange={updateState(index)} /></td>
                                <td><TextField id="standard-basic" label='BO Summary' variant="standard" name="boBal" onChange={updateState(index)} /></td>
                                <td><TextField id="standard-basic" label='DTR' variant="standard" name="dtrBal" onChange={updateState(index)} /></td>
                            </tr></>
                        })}

                    </table>
                    </div> 


                {/* <IRPage7 /> */}
                <div style={{ width: '100%' }}>

                    {/* ------------------------------sb26 data----------------------------- */}
                    <div>
                        <div className='pageCenter'>
                            <RemoveCircleIcon
                                onClick={() => {
                                    setsb26f((prev) =>
                                        prev.filter((data, index) => { return index !== prev.length - 1 })
                                    )
                                }}
                                className='cursorPointer'
                            />
                        </div>
                        <table className='table'>

                            {
                                sb26f.map((data, index) => {
                                    return (<tr key={index}>

                                        <td>SB26</td>
                                        <td><TextField id="standard-basic" label='BOOK NUMBER' variant="standard" name='bookNo' onChange={updateSB26(index)} /></td>
                                        <td><TextField id="standard-basic" label='from RECEIPT NO' variant="standard" name='from' onChange={updateSB26(index)} /></td>
                                        <td><TextField id="standard-basic" label='DATE' variant="standard" name='fromdate' onChange={updateSB26(index)} /></td>
                                        <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='fromamount' onChange={updateSB26(index)} /></td>
                                        <td><TextField id="standard-basic" label='to RECEIPT NO' variant="standard" name='to' onChange={updateSB26(index)} /></td>
                                        <td><TextField id="standard-basic" label='DATE' variant="standard" name='todate' onChange={updateSB26(index)} /></td>
                                        <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='toamount' onChange={updateSB26(index)} /></td>
                                    </tr>)

                                })
                            }

                        </table>
                        <div className='pageCenter'>
                            <AddCircleIcon
                                onClick={() => {
                                    setsb26f([...sb26f, {
                                        bookNo: "",
                                        from: "",
                                        fromdate: "",
                                        fromamount: "",
                                        to: "",
                                        todate: "",
                                        toamount: ""
                                    }])
                                }}
                                className='cursorPointer'
                            />
                        </div>
                    </div>

                    {/* ------------------------------sb28 data----------------------------- */}
                   <div>
                        <div className='pageCenter'>
                            <RemoveCircleIcon
                                onClick={() => {
                                    setsb28f((prev) =>
                                        prev.filter((data, index) => { return index !== prev.length - 1 })
                                    )
                                }}
                                className='cursorPointer'
                            />
                        </div>
                        <table className='table'>

                            {
                                sb28f.map((data, index) => {
                                    return (<tr key={index}>

                                        <td>SB28</td>
                                        <td><TextField id="standard-basic" label='BOOK NUMBER' variant="standard" name='bookNo' onChange={updateSB28(index)} /></td>
                                        <td><TextField id="standard-basic" label='from RECEIPT NO' variant="standard" name='from' onChange={updateSB28(index)} /></td>
                                        <td><TextField id="standard-basic" label='DATE' variant="standard" name='fromdate' onChange={updateSB28(index)} /></td>
                                        <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='fromamount' onChange={updateSB28(index)} /></td>
                                        <td><TextField id="standard-basic" label='to RECEIPT NO' variant="standard" name='to' onChange={updateSB28(index)} /></td>
                                        <td><TextField id="standard-basic" label='DATE' variant="standard" name='todate' onChange={updateSB28(index)} /></td>
                                        <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='toamount' onChange={updateSB28(index)} /></td>
                                    </tr>)

                                })
                            }

                        </table>
                        <div className='pageCenter'>
                            <AddCircleIcon
                                onClick={() => {
                                    setsb28f([...sb28f, {
                                        bookNo: "",
                                        from: "",
                                        fromdate: "",
                                        fromamount: "",
                                        to: "",
                                        todate: "",
                                        toamount: ""
                                    }])
                                }}
                                className='cursorPointer'
                            />
                        </div>
                    </div>

                    {/* ------------------------------pli/rpli data----------------------------- */}
                    <div>
                        <div className='pageCenter'>
                            <RemoveCircleIcon
                                onClick={() => {
                                    setplif((prev) =>
                                        prev.filter((data, index) => { return index !== prev.length - 1 })
                                    )
                                }}
                                className='cursorPointer'
                            />
                        </div>
                        <table className='table'>

                            {
                                plif.map((data, index) => {
                                    return (<tr key={index}>

                                        <td>PLI/RPLI</td>
                                        <td><TextField id="standard-basic" label='BOOK NUMBER' variant="standard"
                                            name='bookNo'
                                            onChange={updatePLI2(index)} /></td>
                                        <td><TextField id="standard-basic" label='from RECEIPT NO' variant="standard"
                                            name='from'
                                            onChange={updatePLI2(index)} /></td>
                                        <td><TextField id="standard-basic" label='DATE' variant="standard"
                                            name='fromdate'
                                            onChange={updatePLI2(index)} /></td>
                                        <td><TextField id="standard-basic" label='AMOUNT' variant="standard"
                                            name='fromamount'
                                            onChange={updatePLI2(index)} /></td>
                                        <td><TextField id="standard-basic" label='to RECEIPT NO' variant="standard"
                                            name='to'
                                            onChange={updatePLI2(index)} /></td>
                                        <td><TextField id="standard-basic" label='DATE' variant="standard"
                                            name='todate'
                                            onChange={updatePLI2(index)} /></td>
                                        <td><TextField id="standard-basic" label='AMOUNT' variant="standard"
                                            name='toamount'
                                            onChange={updatePLI2(index)} /></td>
                                    </tr>)

                                })
                            }

                        </table>
                        <div className='pageCenter'>
                            <AddCircleIcon
                                onClick={() => {
                                    setplif([...plif, {
                                        bookNo: "",
                                        from: "",
                                        fromdate: "",
                                        fromamount: "",
                                        to: "",
                                        todate: "",
                                        toamount: ""
                                    }])
                                }}
                                className='cursorPointer'
                            />
                        </div>
                    </div>

                    {/* ------------------------------ms87 data----------------------------- */}
                    <div>
                        <div className='pageCenter'>
                            <RemoveCircleIcon
                                onClick={() => {
                                    setms87f((prev) =>
                                        prev.filter((data, index) => { return index !== prev.length - 1 })
                                    )
                                }}
                                className='cursorPointer'
                            />
                        </div>
                        <table className='table'>

                            {
                                ms87f.map((data, index) => {
                                    return (<tr key={index}>

                                        <td>MS87</td>
                                        <td><TextField id="standard-basic" label='from RECEIPT NO' variant="standard"
                                            name='from'
                                            onChange={updateMS87(index)}
                                        /></td>
                                        <td><TextField id="standard-basic" label='DATE' variant="standard"
                                            name='fromdate'
                                            onChange={updateMS87(index)}
                                        /></td>
                                        <td><TextField id="standard-basic" label='AMOUNT' variant="standard"
                                            name='fromamount'
                                            onChange={updateMS87(index)}
                                        /></td>
                                        <td><TextField id="standard-basic" label='to RECEIPT NO' variant="standard"
                                            name='to'
                                            onChange={updateMS87(index)}
                                        /></td>
                                        <td><TextField id="standard-basic" label='DATE' variant="standard"
                                            name='todate'
                                            onChange={updateMS87(index)}
                                        /></td>
                                        <td><TextField id="standard-basic" label='AMOUNT' variant="standard"
                                            name='toamount'
                                            onChange={updateMS87(index)}
                                        /></td>
                                    </tr>)

                                })
                            }

                        </table>
                        <div className='pageCenter'>
                            <AddCircleIcon
                                onClick={() => {
                                    setms87f([...ms87f, {
                                        from: "",
                                        fromdate: "",
                                        fromamount: "",
                                        to: "",
                                        todate: "",
                                        toamount: ""
                                    }])
                                }}
                                className='cursorPointer'
                            />
                        </div>
                    </div>

                    {/* specimen signature book */}
                    <div>
                        <p>SPECIMEN SIGNATURE BOOK VERIFICATION</p>
                        <table className='table'>
                            <tr>
                                <th>Account Number</th>
                                <th>Photograph available</th>
                                <th>Signature available</th>
                            </tr>
                            {
                                ssbook.map((data, index) => {
                                    return <>
                                        <tr>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard"
                                                name='accountNo'
                                                onChange={updateSSbook(index)}
                                            /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard"
                                                name='signature'
                                                onChange={updateSSbook(index)}
                                            /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard"
                                                name='photograph'
                                                onChange={updateSSbook(index)}
                                            /></td>
                                        </tr>
                                    </>
                                })

                            }
                        </table>
                    </div>

                    {/* Passbooks */}

                    <div>
                        <p>PASSBOOK INFORMATION</p>
                        <table className='table'>
                            <tr>
                                <th colSpan={3}>SB</th>
                                <th colSpan={3}>RD</th>
                            </tr>
                            <tr>
                                <th>Account Number</th>
                                <th>Date of Last Transaction</th>
                                <th>Balance after transaction</th>

                                <th>Account Number</th>
                                <th>Date of Last Transaction</th>
                                <th>Balance after transaction</th>


                            </tr>
                            {
                                sbrd.map((data, index) => {
                                    return <>
                                        <tr>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='sbAccount' onChange={updatesbrd(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='sbDLT' onChange={updatesbrd(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='sbBAT' onChange={updatesbrd(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='rdAccount' onChange={updatesbrd(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='rdDLT' onChange={updatesbrd(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='rdBAT' onChange={updatesbrd(index)} /></td>

                                        </tr>
                                    </>
                                })
                            }
                        </table>

                        <table className='table'>
                            <tr>
                                <th colSpan={3}>SSA</th>
                                <th colSpan={3}>TD</th>
                            </tr>
                            <tr>
                                <th>Account Number</th>
                                <th>Date of Last Transaction</th>
                                <th>Balance after transaction</th>

                                <th>Account Number</th>
                                <th>Date of Last Transaction</th>
                                <th>Balance after transaction</th>

                            </tr>
                            {
                                ssatd.map((data, index) => {
                                    return <>
                                        <tr>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='ssaAccount' onChange={updatessatd(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='ssaDLT' onChange={updatessatd(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='ssaBAT' onChange={updatessatd(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='tdAccount' onChange={updatessatd(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='tdDLT' onChange={updatessatd(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='tdBAT' onChange={updatessatd(index)} /></td>

                                        </tr>
                                    </>
                                })
                            }


                        </table>
                    </div>

                    {/* Transaction details */}
                    <div>
                        <p>TRANSACTIONS OF THE BO</p>
                        <table className='table'>
                            <tr>
                                <th>Date</th>
                                <th>SB Dep</th>
                                <th>SB Wdl</th>
                                <th>RD Dep</th>
                                <th>TD Dep</th>
                                <th>SSA Dep</th>
                                <th>IPPB Dep</th>
                                <th>CELC Dep</th>
                                <th>CSC Dep</th>
                                <th>IPPB Wdl</th>

                            </tr>
                            {
                                txn.map((data, index) => {
                                    return <>
                                        <tr>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='date' onChange={updatetxn(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='sbd' onChange={updatetxn(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='sbw' onChange={updatetxn(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='rdd' onChange={updatetxn(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='rdw' onChange={updatetxn(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='tdd' onChange={updatetxn(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='ssad' onChange={updatetxn(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='ippbd' onChange={updatetxn(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='celc' onChange={updatetxn(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='ippbw' onChange={updatetxn(index)} /></td>

                                        </tr>
                                    </>
                                })
                            }
                        </table>
                    </div>

                    {/* PLI passbook */}
                    <div>
                        <p>PLI/ RPLI PASSBOOK INFORMATION</p>
                        <table className='table'>

                            <tr>
                                <th>Policy Number</th>
                                <th>Name of Policy holder</th>
                                <th>DLC</th>
                                <th>Premium</th>
                            </tr>

                            {
                                plipass.map((data, index) => {
                                    return <>
                                        <tr>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='policyNo' onChange={updateplipass(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='dlc' onChange={updateplipass(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='premium' onChange={updateplipass(index)} /></td>


                                        </tr>
                                    </>
                                })
                            }
                        </table>


                    </div>

                    {/* PLI RPLI Transaction */}
                    <div>
                        <p>PLI/RPLI Transactions</p>
                        <table className='table'>
                            <tr>
                                <th>Data</th>
                                <th>Amount</th>
                                <th>Data</th>
                                <th>Amount</th>
                                <th>Data</th>
                                <th>Amount</th>
                            </tr>

                            {
                                pli.map((data, index) => {
                                    return <>
                                        <tr>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='date1' onChange={updatepli(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='amount1' onChange={updatepli(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='date2' onChange={updatepli(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='amount2' onChange={updatepli(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='date3' onChange={updatepli(index)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='amount3' onChange={updatepli(index)} /></td>

                                        </tr>
                                    </>
                                })
                            }
                        </table>
                    </div> 

                </div>

                <button onClick={() => {

                    setAbc(false);
                }




                }>SUBMIT</button>

            </div> : <IRFinal pageS1={page1} pageS2={page2} pageS3={page3} pageS4={page4} pageS5={page5} pageS6={page6} pageS6DTR={page6DTR} sb26f={sb26f} ms87f={ms87f} sb28f={sb28f} plif={plif} ssbook={ssbook} sbrd={sbrd} ssatd={ssatd} txn={txn} plipass={plipass} pli={pli} />}
        </div>
    )
}

export default IRS
