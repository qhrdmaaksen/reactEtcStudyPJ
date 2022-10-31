import classes from './Notification.module.css';

const Notification = (props) => {
	let specialClasses = '';

	if (props.status === '에러') {
		specialClasses = classes.error;
	}
	if (props.status === '성공') {
		specialClasses = classes.success;
	}

	const cssClasses = `${classes.notification} ${specialClasses}`;

	return (
			<section className={cssClasses}>
				<h2>{props.title}</h2>
				<p>{props.message}</p>
			</section>
	);
};

export default Notification;