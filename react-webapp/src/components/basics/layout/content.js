import { Route, Routes } from "react-router-dom";

/* Import home */
import Home from "../../home/home";
/* Import fieldowner */
import Farms from "../../fieldowner/farms";
import FarmDetails from "../../fieldowner/farmDetails"
import WorkerDetails from "../../fieldowner/worker/workerDetails";
/* Import camera */
import UploadPictures from "../../pictures/uploadPictures";
/* Import admin */
import AdminFieldOwners from '../../admin/fieldowner/fieldOwners';
import AdminFieldOwnerDetails from '../../admin/fieldowner/fieldOwnerDetails';
import AdminFieldOwnerFarmDetails from '../../admin/fieldowner/farms/farmDetails'
import AdminFieldOwnerFarmFieldDetails from '../../admin/fieldowner/farms/worker/workerDetails'
/* Import account */
import Account from '../../account/account'

export default function Content(){
    return (
        <div className="content">
            <Routes>
                {/* Home */}
                <Route exact path="/" element={<Home/>}></Route>
                {/* Field owner */}
                {/* Manage farms --> fields + workers */}
                <Route path="/farms/" element={<Farms/>}></Route>
                <Route path="/farms/:farmId" element={<FarmDetails/>}></Route>
                <Route path="/farms/:farmId/worker/:workerId" element={<WorkerDetails/>}></Route>
                {/* Upload pictures */}
                <Route path="/uploadPictures" element={<UploadPictures />}></Route>
                {/* Admin */}
                {/* Manage fieldowners */}
                <Route path="/admin/adminFieldOwners/" element={<AdminFieldOwners/>}></Route>
                <Route path="/admin/adminFieldOwners/:fieldOwnerId" element={<AdminFieldOwnerDetails/>}></Route>
                <Route path="/admin/adminFieldOwners/:fieldOwnerId/farm/:farmId" element={<AdminFieldOwnerFarmDetails/>}></Route>
                <Route path="/admin/adminFieldOwners/:fieldOwnerId/farm/:farmId/worker/:workerId" element={<AdminFieldOwnerFarmFieldDetails/>}></Route>
                {/* All users */}
                <Route path="/account/" element={<Account/>}></Route>
            </Routes>
        </div>
    )
}