import React from "react";
import Image from "next/image";
import cx from "classnames";
import Link from "next/link";
import { NumericFormat } from "react-number-format";

interface TableRowProps {
	title: string;
	item: string;
	category: string;
	price: number;
	status: string;
	img: string;
}
export default function TableRow(props: TableRowProps) {
	const { img, title, item, category, price, status } = props;
	const statusClass = cx({
		"float-start icon-status": true,
		pending: status === "pending",
		success: status === "success",
		failed: status === "failed",
	});

	return (
		<tr className="align-middle">
			<th scope="row">
				<img className="float-start me-3 mb-lg-0 mb-3" src={img} width="80" height="60" alt="" />
				<div className="game-title-header">
					<p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
					<p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
				</div>
			</th>
			<td>
				<p className="fw-medium color-palette-1 m-0">{item}</p>
			</td>
			<td>
				<p className="fw-medium text-start color-palette-1 m-0">
					{" "}
					<NumericFormat value={price} displayType={"text"} prefix={"Rp "} thousandSeparator={true} />
				</p>
			</td>
			<td>
				<div>
					<span className={statusClass}></span>
					<p className="fw-medium text-start color-palette-1 m-0 position-relative">{status}</p>
				</div>
			</td>
			<td>
				<Link href="/member/transactions/detail" className="btn btn-status rounded-pill text-sm">
					Details
				</Link>
				<a></a>
			</td>
		</tr>
	);
}
