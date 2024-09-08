import { useTranslations } from 'next-intl'
import Button from './components/Button'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          {t('A')}{' '}
          <span className='bg-span-bg bg-clip-text text-transparent'>
            {t('Social-Media')}
          </span>
          <br />
          {t('Platform for Content Creators')}
        </h1>
        <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
          {t(
            'Creating a platform that empowers content creators by providing scalable, secure, and transparent monetization through micro-donations, and AI-powered fraud detection.'
          )}
        </div>
        <div className='mt-4 flex flex-row gap-4'>
          <a
            href='https://auth0-saas-starter-eight-gamma.vercel.app/'
            target='_blank'
          >
            <Button rounded size='large'>
              {t('Get Started')}
            </Button>
          </a>
          <a
            href='https://github.com/yahyaparvar/nextjs-template'
            target='_blank'
          >
            <Button rounded size='large' variant='secondary'>
              {t('Donate')}
            </Button>
          </a>
        </div>
      </section>
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>{t('AI-Powered Fraud Detection:')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Ensures transactions are safe and genuine.'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Smart Contracts:')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Automates and secures micro-donations, rewards distribution, and governance.'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Transparent')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Fully Transparent micro donation system using Aptos Blockchain'
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
