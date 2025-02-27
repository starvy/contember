import { BindingError } from '@contember/react-binding'

export const verifySortableProp = (props: {sortableBy?: unknown; orderBy?: unknown}) => {
	if (!('sortableBy' in props) && !('orderBy' in props)) {
		throw new BindingError(`Using a <Repeater /> without either the 'orderBy' or the 'sortableBy' property. This will currently result in bad user experience as the items may shuffle unpredictably over time.
	- To allow the user to interactively order the items, use 'sortableBy'.
	- To control the order in which the items are automatically displayed, use 'orderBy'.
	- To disable this warning, set either of these to undefined.`,
		)
	}
}
