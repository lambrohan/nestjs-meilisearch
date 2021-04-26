import { Inject } from '@nestjs/common'
import { meiliToken } from '../constants'

export function InjectMeiliSearch() {
	return Inject(meiliToken)
}
