import { Question } from '../components';
import { QuestionType } from '../components/questions/QuestionProps';

const questions = [];

export default function Home() {
  return (
    <div className='w-full'>
      {/* <h1 className='text-4xl'>Form</h1>
      <h1 className='text-4xl font-bold'>Form Bold</h1>
      <ul>
        <li className='text-bcBluePrimary'>bcBluePrimary</li>
        <li className='text-bcBlack'>bcBlack</li>
        <li className='text-bcGray'>bcGray</li>
        <li className='text-bcBlueLink'>bcBlueLink</li>
        <li className='text-bcBlueNav'>bcBlueNav</li>
        <li className='text-bcRedError'>bcRedError</li>
        <li className='text-bcGreenSuccess'>bcGreenSuccess</li>
        <li className='text-bcBlueAccent'>bcBlueAccent</li>
        <li className='text-bcBlueIndicator'>bcBlueIndicator</li>
        <li className='text-bcLightBackground'>bcLightBackground</li>
      </ul> */}
      <div className='p-2'>
        <Question
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          options={[
            { key: 'yes', label: 'Yes' },
            { key: 'no', label: 'No' },
          ]}
          question='Have you been experiencing any of the following symptoms?'
          questionKey='yesno0'
          type={QuestionType.Radio}
          onAnswer={() => {
            /* Possibly show the next question depending on answer */
          }}
        />
      </div>
      <div className='p-2'>
        <Question
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          options={[
            { key: 'yes', label: 'Yes' },
            { key: 'no', label: 'No' },
          ]}
          question='Have you been experiencing any of the following symptoms?'
          questionKey='yesno1'
          type={QuestionType.Radio}
          onAnswer={() => {
            /* Possibly show the next question depending on answer */
          }}
        />
      </div>
      <div className='p-2'>
        <Question
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          options={[
            { key: 'cold', label: 'Cold' },
            { key: 'flu', label: 'Flu' },
            { key: 'headaches', label: 'Headaches' },
          ]}
          question='Checkbox question?'
          questionKey='multi1'
          type={QuestionType.Checkbox}
          onAnswer={values => {
            /* Possibly show the next question depending on answer */
          }}
        />
      </div>
    </div>
  );
}
