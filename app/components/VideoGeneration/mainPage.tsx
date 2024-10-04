import HistoryVideoComponent from "./Components/HistoryVideoComponent"
import InputComponent from "./Components/InputComponent"
import PreviewComponent from "./Components/PreviewComponent"
import VideogenerateComponent from './Components/VideogenerateComponent'

const MainPage = () => {

    return (
        <div className="flex justify-center p-8">
            <div className="flex w-1/2 p-2 flex-col">
                <InputComponent />
                <VideogenerateComponent />
            </div>
            <div className="flex w-1/2 p-2 flex-col">
                <PreviewComponent />
                <HistoryVideoComponent />
            </div>
        </div>
    )

}

export default MainPage
