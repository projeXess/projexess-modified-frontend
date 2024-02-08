'use client'
import Subheader from '@/components/dashboard/Subheader'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { teams } from '@/utils/constants'
import { Avatar } from 'flowbite-react'
import { PlusIcon } from 'lucide-react'
import { ChartContainer, BarPlot, BarChart } from '@mui/x-charts';
import React from 'react'

const generateRandomColor = () => {
    const numbers = []
    const colors = ['card-1-bg', 'card-2-bg', 'card-3-bg'];
    const randomNumber = Math.floor(Math.random() * 3);
    return colors[randomNumber];
}

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

type Props = {}

function page({ }: Props) {
    return (
        <div className="w-full h-auto p-3 flex gap-4 flex-col">
            <Subheader title={"Board"} />

            <div className='w-full p-3 flex items-center justify-between gap-4'>
                {
                    teams.map(team => (
                        <Card className={`${generateRandomColor()} h-[200px] w-[25%] flex flex-col justify-between`} key={team.name}>
                            <CardHeader className='flex items-center flex-row gap-5 '>
                                <div className="">
                                    <Avatar.Group>
                                        <Avatar.Counter total={team.members} href="#" />
                                    </Avatar.Group>

                                </div>
                                <h1>{team.name}</h1>
                            </CardHeader>
                            <CardContent className='text-[0.6rem]'>

                                {team.task}
                            </CardContent>
                            <CardFooter>
                                <Progress value={team.progress} />
                            </CardFooter>
                        </Card>
                    ))
                }

                <Card className="loadmorebg h-[200px] w-[25%] grid place-content-center cursor-pointer">
                    <h1 className='flex items-center gap-4'>Load More <PlusIcon /></h1>
                </Card>
            </div>

            <div>
              
            </div>
        </div>
    )
}

export default page