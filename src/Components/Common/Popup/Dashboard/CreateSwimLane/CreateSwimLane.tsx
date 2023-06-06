import Popup from "../../Popup"

interface CreateSwimLaneType {
    close: () => void,
}

const CreateSwimLane = ({close}: CreateSwimLaneType) => {
    return <Popup close={close}>
        <form>

        </form>
    </Popup>
}

export default CreateSwimLane