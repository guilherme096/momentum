import Calendar from 'react-calendar';
import PageLayout from '../../layouts/PageLayout';
import PtCalendar from '../../components/PtCalendar';

export default function PersonalTrainer() {
    return (
        <PageLayout pageName="Personal Trainer">
            <div className='flex justify-between items-center ml-9 mr-9 mb-9'>
                <div className='flex justify-between items-center'>

                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://scontent.fopo2-2.fna.fbcdn.net/v/t39.30808-6/300763703_421143786665040_2928983804635098984_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGFXd43cbMLWtyarPZXKI9ELmGdFsKnwO8uYZ0WwqfA74Z-_27vZ35OVTPdoHbYlr6lpb1x2ohmLlo7UDIan3op&_nc_ohc=MXJYpTMf4dQQ7kNvgFcigZk&_nc_ht=scontent.fopo2-2.fna&oh=00_AYBPqJ299bnAWEovc0AJaPEX3vae7RFSAnfCi27Uc-cwuA&oe=6648656D" />
                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-start justify-center">
                    <h1 className="text-2xl font-bold mt-2 ">Kevin Monteiro</h1>
                    <h3 className='stat-title text-xl mb-1'>Personal Trainer</h3>
                </div>
            </div>

      <h1 className="text-2xl font-bold">Next Class</h1>

      <div className="flex items-center flex-col mt-4 justify-between">
        <div className="flex flex-row items-center">
          <div className="text-5xl font-bold">20</div>
          <div className="flex flex-col ml-2 items-center ">
            <div className="text-lg leading-tight">APR</div>
            <div className="text-lg leading-tight">2024</div>
          </div>

          <div className="border border-gray-500 py-5 mr-5 ml-5"></div>

               <div className="text-4xl font-bold">18h00</div>

            </div>
                <div className="text-lg mt-3">plan: leg day</div>
            </div>

        </PageLayout>
    );
}
