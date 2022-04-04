import React from 'react';
import Calendar from 'rc-year-calendar';
import 'rc-year-calendar/locales/rc-year-calendar.es';
function Calendario(props) {
	const { dataSource } = { ...props };
	return (
		<div className='detailpanel-calendar MuiPaper-elevation2'>
			<Calendar roundRangeLimits={true} language='es' dataSource={dataSource} />
		</div>
	);
}

export default Calendario;
