import Popup from "../Popup"

interface CreateCardType {
    close: () => void,
}

const CreateCard = ({close}: CreateCardType) => {
    return <Popup close={close}>
        <div>

        </div>
    </Popup>
}

export default CreateCard