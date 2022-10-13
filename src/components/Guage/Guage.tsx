import React from 'react';
import { Data } from '@/types/guage.types';
import { getGuageDegrees } from '@/util/getGuageDegrees';

import styles from './Guage.module.css';

const Guage: React.FC<Data> = ({ min, value, max, unit }) => (
	<div className={styles.container}>
		{!!unit && (
			<div className="sr-only" data-testid="meter-unit">
				{unit}
			</div>
		)}

		<meter
			className="sr-only"
			min={min}
			max={max}
			value={value}
			data-testid="meter"
		/>

		<div className={styles.meter} aria-hidden />
		<div
			className={styles.meter_dial}
			style={{
				transform: `rotateZ(${getGuageDegrees({ min, max, value })}deg)`,
			}}
			aria-hidden
		>
			<div className={styles.meter_dialCenter} aria-hidden />
		</div>

		<div className={styles.min} aria-hidden>
			{min}
		</div>
		<div className={styles.max} aria-hidden>
			{max}
		</div>
		<div className={styles.unit} aria-hidden>
			{unit}
		</div>
		<div className={styles.value} aria-hidden>
			{value}
		</div>
	</div>
);

export default Guage;
