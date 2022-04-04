import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import QRCodeSVG from 'qrcode.react';
import Barcode from 'react-barcode';
import * as BsIcons from 'react-icons/bs';
import './QrCode.css';

function QrCode(props) {
	const imprimirRef = useRef();
	const { value } = { ...props };
	const handlePrint = useReactToPrint({
		content: () => imprimirRef.current,
	});
	return (
		<div className='qr-wrapper'>
			<div className='codigos' ref={imprimirRef}>
				<Barcode value={value} />
				<QRCodeSVG className='qr' value={value} level='H' renderAs='svg' />
			</div>
			<button className='imprimir' onClick={handlePrint}>
				Imprimir <BsIcons.BsPrinterFill />
			</button>
		</div>
	);
}

export default QrCode;
