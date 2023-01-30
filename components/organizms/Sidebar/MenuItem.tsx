import Link from "next/link";
import React from "react";
import Image from "next/image";
import cx from "classnames";

interface MenuItemProps {
	title: string;
	href?: string;
	icon: string;
	active?: boolean;
	onClick?: () => void;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
	const { title, href, icon, active, onClick } = props;
	const classItem = cx({
		item: true,
		"mb-30": true,
		active,
	});
	return (
		<div className={`${classItem}`} onClick={onClick}>
			<Image src={`/icon/${icon}.svg`} className="icon me-3" width={25} height={25} alt={"logo"} />
			<p className="item-title m-0">
				{onClick ? (
					<a className="text-lg text-decoration-none">{title}</a>
				) : (
					<Link href={`${href}`} className="text-lg text-decoration-none">
						{title}
					</Link>
				)}
			</p>
		</div>
	);
}
