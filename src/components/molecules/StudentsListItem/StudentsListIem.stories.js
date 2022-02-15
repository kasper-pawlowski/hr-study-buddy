import StudentsListItem from './StudentsListItem';

export default {
    title: 'Components/Molecules/StudentsListItem',
    component: StudentsListItem,
};

const Template = (args) => <StudentsListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    userData: {
        name: 'Adam Romański',
        attendance: '55%',
        average: '3.5',
    },
};

export const GoodGrades = Template.bind({});
GoodGrades.args = {
    userData: {
        name: 'Kasia Romańska',
        attendance: '85%',
        average: '5.0',
    },
};
