# fitzbuzz_client


## Description
Commandline API client to access FitzBuzz application

## Original application
https://www.github.com/nulty/fitzbuzz

## Install

`$ npm install -g`

This will install the fb_client as an executable in your `/usr/bin` directory. Make sure you have permission to install to `/usr/` and to run executables from `/usr/bin`

## Run
Start the dependent application on localhost port 3000 so the API client can reach it

## Usage

`$ fb_client --help` will give you the basic usage.

There are two endpoints - users and fizzbuzz.

## Example

#### Collection
`$ fb_client fizzbuzzs`

returns users in json format

Add `--page` and `--perpage` options to filter collection

```
$ fb_client fizzbuzzs --page 0 --perpage 5

[ { number: 1,
    value: '1',
    created_at: '2016-06-27T17:38:01Z',
    updated_at: '2016-06-27T17:38:01Z' },
  { number: 2,
    value: '2',
    created_at: '2016-06-27T17:38:01Z',
    updated_at: '2016-06-27T17:38:01Z' },
  { number: 3,
    value: 'fizz',
    created_at: '2016-06-27T17:38:01Z',
    updated_at: '2016-06-27T17:38:01Z' },
  { number: 4,
    value: '4',
    created_at: '2016-06-27T17:38:01Z',
    updated_at: '2016-06-27T17:38:01Z' },
  { number: 5,
    value: 'buzz',
    created_at: '2016-06-27T17:38:01Z',
    updated_at: '2016-06-27T17:38:01Z' } ]

```
#### Single

Pass the optional id to the command to get a single resource
```
$ fb_client fizzbuzzs 15
{ number: 15,
  value: 'fizzbuzz',
  created_at: '2016-06-27T17:38:01Z',
  updated_at: '2016-06-27T17:38:01Z' }
```

## Available endpoints
```
fb_client users
fb_client users <username>

fb_client fizzbuzzs
fb_client fizzbuzzs <number>

fb_client favourites
fb_client favourites <username>
```

## Submission

This client only makes get requests. It would have been nice to get the posting requests complete along with authentication. I used much of the time spent on this learning node and the libraries `commander.js` and `node-rest-client`

I wanted to break the endpoints out into modules or sub-commands as documented in the commander.js documentation. Some of the work I did there is available in the multiple-commands branch [here](https://github.com/nulty/fitzbuzz_client/tree/multiple-commands)

For future, I would like to complete the full behaviour of the API and add authentication.
