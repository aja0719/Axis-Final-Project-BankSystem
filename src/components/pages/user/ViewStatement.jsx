import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";
import jsPDF from "jspdf";
import 'jspdf-autotable';
const ViewStatement = () => {

    const [customer, setCustomer] = useState(!null);
  const [id,setId]=useState(localStorage.getItem('id'))
  //fetch particular data
  useEffect(() => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8090/getCustomerById/'+id,
      headers: {
        'Cookie': 'JSESSIONID=84E59A7F34CB91EA8AB03E582817B29C'
      }
    };

    axios.request(config)
      .then((response) => {
        setCustomer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


    const [transactions, setTransaction] = useState([]);
const [data,setData]=useState([]);
    const { customerId } = useParams();

    //My Method//

    useEffect(() => {
        findCustomer();
    }, []);

    const findCustomer = async () => {
        const res = await axios.get(`http://localhost:8090/transactions/transactionByCustomerId/${customerId}`)
        setTransaction(res.data);
        console.log(res);
        setData(res.data)
    }

    const pdfRef = useRef();

    const generatePdf=async()=>{
        const doc = new jsPDF({orientation:'landscape'});
        doc.autoTable({
            html:'#my-table'
        })

        // doc.html(pdfRef.current, 15, 15, {
        //     width: 250,
        // });

        doc.save("statement.pdf");
        console.log("called pdf")
    }

    return (
        <>
        
            <p class="text-center fs-1" id="adminHead" >Transaction Statements</p>
            {/* <button onClick={generatePdf}>Export</button> */}
            <button onClick={generatePdf}>Export</button>
            <div class="card ">
                <span class="card-body "  > Customer ID : <b>{customer.customerId}</b> <br></br>
                Account Number              : <b>{customer.accountNumber}</b> <br></br>
                 Email : <b>{customer.customerEmail}</b> 
                </span>
                
            </div>
           
            <div className=''>
                <div  className='py-6'>
                    <table className="table border shadow" id="my-table"  >
                        <thead>
                            <tr>
                                <th scope="col">Customer Id</th>
                                <th scope="col">Beneficiary Account Number</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Transaction Nature</th>
                                <th scope="col">Transaction Type</th>
                                <th scope="col">Transaction Date</th>
                                <th scope="col">Narration</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                transactions.map((transaction, index) => (
                                    <tr>
                                        <td>{transaction.customerId}</td>
                                        <td>{transaction.beneficiaryAccountNumber}</td>
                                        <td>{transaction.amount}</td>
                                        <td>{transaction.transactionNature}</td>
                                        <td>{transaction.transactionType}</td>
                                        <td>{transaction.transactionDate}</td>
                                        <td>{transaction.narration}</td>
                                        <td>
                                        </td>
                                    </tr>
                                ))}

                        </tbody>
                    </table>
                </div>
            </div>
            
        </>
    )
}
export default ViewStatement;