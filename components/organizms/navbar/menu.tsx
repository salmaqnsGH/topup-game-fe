import React from "react";
import cx from "classnames";
import Link from "next/link";

interface MenuProps {
	title: string;
	active?: boolean;
	href: string;
}

export default function Menu(props: MenuProps) {
	const { title, active = false, href = "/" } = props;
	const titleClass = cx({
		"nav-link": true,
		active: active,
	});

	return (
		<li className="nav-item my-auto">
			<Link href={href} className={titleClass} aria-current="page">
				{title}
			</Link>
		</li>
	);
}
