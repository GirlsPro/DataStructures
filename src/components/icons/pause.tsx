import React, { SVGAttributes } from 'react';

export default ({ fill, ...params }: SVGAttributes<SVGSVGElement>) => (
	<svg
		version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
		x="0px" y="0px"
		width="100%" height="100%"
		viewBox="0 0 792 792"
		style={{ fill }}
		{...params}
	>
		<g>
			<g id="_x38__12_">
				<g>
					<path d="M282.856,0H169.714c-31.228,0-56.571,25.344-56.571,56.571v678.857c0,31.228,25.344,56.571,56.571,56.571h113.143
						c31.256,0,56.572-25.315,56.572-56.571V56.571C339.428,25.344,314.112,0,282.856,0z M622.285,0H509.143
						c-31.256,0-56.572,25.344-56.572,56.571v678.857c0,31.228,25.316,56.571,56.572,56.571h113.143
						c31.256,0,56.572-25.315,56.572-56.571V56.571C678.857,25.344,653.541,0,622.285,0z" />
				</g>
			</g>
		</g>
	</svg>
);
