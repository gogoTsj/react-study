import {RouterContext} from "./RouterContext"
import LifeCycle from "./LifeCycle";

// 暗号：荔枝
export default function Prompt({message, when = true}) {
	return (
		 <RouterContext.Consumer>
			 {context => {
			 	if (!when) return null
				 const method = context.history.block

				 return (
				 	 <LifeCycle
						  onMount = {self => {
								self.release = method(message)
						  }}
						  onUnMount = {self => {
								if (self.release) self.release()
						  }}
				    />
				 )
			 }}
		 </RouterContext.Consumer>
	)
}
