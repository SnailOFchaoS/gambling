import React from "react";
import Image from "next/image";
import styles from './PlayingBorder.module.scss'

export const PlayingBorder = () => {
	return (
		<div className={styles.background_wrapper}>
			<Image src='/play_table.svg' alt="" width="867" height="640"/>
		</div>
	)
}