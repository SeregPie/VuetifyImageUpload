export default function(h) {
	let {
		forcedWidth,
		forcedHeight,
	} = this;
	return h(
		'div',
		{
			style: {
				display: 'grid',
				opacity: 0,
				overflow: 'hidden',
				pointerEvents: 'none',
				visibility: 'hidden',
			},
		},
		[h(
			'div',
			{
				style: {
					height: `${forcedHeight}px`,
					width: `${forcedWidth}px`,
				},
			},
		)],
	);
}
