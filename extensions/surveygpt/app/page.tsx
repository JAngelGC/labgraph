import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from '@heroicons/react/24/outline';

function HomePage() {
  return (
    <div
      className=" flex flex-col items-center justify-center h-screen
     px-2 text-white"
    >
      <h1 className="text-5xl font-bold mb-20 text-custom-gray">SurveyGPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <div className="space-y-2">
              <p className="infoText">Receive personalized prompts</p>
              <p className="infoText">
                Change the SurveyGPT model to generate different responses
              </p>
              <p className="infoText">
                Messages are stored in Firebase's Firestore
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
