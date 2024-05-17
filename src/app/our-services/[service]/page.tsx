"use client"
import Input from '@/components/Input';
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
interface IFormInput {
    firstName: string
    lastName: string
    iceCreamType: { label: string; value: string }
  }

const page = () => {

    const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
		watch,
		reset,
	} = useForm({
		defaultValues: {
			
		},
	});
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log(data)

		// await toast.promise(updateService({ formData: data }).unwrap(), {
		// 	error: t('could-not-update'),
		// 	pending: t('trying-to-update'),
		// 	success: t('updated-successfully') as string,
		// });
      }
    
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex bg-primary px-4 py-4 gap-5 flex-row w-full'>
                <Controller
                            name="Title en"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    inputProps={{
                                        ...field,
                                        id: 'Title en',
                                        name: 'Title.en',
                                        type: 'text',
                                        placeholder: 'title in english',
                                        defaultValue: `${"x"}`,
                                    }}
                                    label={"Title en"}
                                />
                            )}
                        />
                <Controller
                    name="Title en"
                    control={control}
                    render={({ field }) => (
                        <Input
                            inputProps={{
                                ...field,
                                id: 'Title en',
                                name: 'Title.en',
                                type: 'text',
                                placeholder: 'title in english',
                                defaultValue: `${"x"}`,
                            }}
                            label={"Title en"}
                        />

                
                )}
            />
            </div>

            <div className='flex bg-primary px-4 py-4 gap-5 flex-row w-full'>
                <Controller
                            name="Title en"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    inputProps={{
                                        ...field,
                                        id: 'Title en',
                                        name: 'Title.en',
                                        type: 'text',
                                        placeholder: 'title in english',
                                        defaultValue: `${"x"}`,
                                    }}
                                    label={"Title en"}
                                />
                            )}
                        />
                <Controller
                    name="Title en"
                    control={control}
                    render={({ field }) => (
                        <Input
                            inputProps={{
                                ...field,
                                id: 'Title en',
                                name: 'Title.en',
                                type: 'text',
                                placeholder: 'title in english',
                                defaultValue: `${"x"}`,
                            }}
                            label={"Title en"}
                        />

                
                )}
            />
            </div>
        
</form>
    </div>
    
   
  )
}

export default page